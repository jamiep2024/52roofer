const { spawn } = require('child_process');
const path = require('path');

// Helper function to run a command and return a promise
function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command} ${args.join(' ')}`);
    const proc = spawn(command, args, {
      stdio: 'inherit',
      ...options
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    proc.on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    // 1. Install dependencies
    console.log('\nInstalling dependencies...');
    await runCommand('npm', ['install']);

    // 2. Build the project
    console.log('\nBuilding project...');
    await runCommand('npm', ['run', 'build']);

    // 3. Start the development server
    console.log('\nStarting development server...');
    const server = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit'
    });

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000));

    // 4. Run URL verification
    console.log('\nVerifying URLs...');
    await runCommand('node', ['scripts/verify-all-redirects.js']);

    // 5. Clean up
    console.log('\nStopping server...');
    server.kill();
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
