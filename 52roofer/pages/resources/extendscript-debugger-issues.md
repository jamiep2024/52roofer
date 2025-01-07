# ExtendScript Debugger Known Issues

## Compatibility Issues

### Apple Silicon (M1) Processors
The extension fails to work on Apple devices using Apple Silicon (e.g. M1 processors). Internally, the extension interfaces with a special library that handles communication with host applications. This library is currently Intel-only.

**Workaround:**  
To successfully run the extension on Apple devices running Apple Silicon, VS Code itself must be run with Rosetta. Please see Apple's documentation for information on how to configure a universal build of VS Code to run using Rosetta. Alternatively, you can download the Intel-specific build of VS Code and run it directly.

### Windows on ARM Devices
The extension fails to work on Windows on ARM devices. Use of the ExtendScript Debugger on Windows on ARM devices is not supported at this time.

## Host Application Issues

### Bring Target to Front
Bring Target to Front does not work for certain host applications. Certain host applications on certain operating systems may ignore the extension's request to come forward.

**Workaround:**  
Add `BridgeTalk.bringToFront("host-app-specifier")` to the top of the script you wish to evaluate.

### InDesign Server Debugging
The debugger fails to connect to InDesign Server. The ExtendScript Debugger extension fails to recognize that InDesign Server is running. This is due to a BridgeTalk registration issue in InDesign Server itself.

**Workaround:**  
See the InDesign Server (or When Host Applications Go Rogue) section for information on how to work around this issue.

## Debugging Issues

### `this` Object Visibility
The `this` object does not appear in the Variables view. All ExtendScript engines contain a bug that causes the implicit `this` variable to display incorrect contents when viewed from all but the top stack frame in a given call stack (only the implicit `this` for the top stack frame is ever resolved).

**Workaround:**  
Add `var _this = this;` to your script. The `_this` variable will appear in the Variables view and allow you to inspect the contents of the implicit `this` as expected.

**Note:** This issue also affects the Debug Console. Entering `this` into the Debug Console will only ever refer to the implicit `this` resolved in the context of the top stack frame.

### Binary Data Handling
Unencoded binary values may break the underlying debugger protocol. All host applications have a known bug where attempts to send binary-encoded data to the debugger will fail. This typically results in missing Debug Console output or an empty Variables view.

**Example Scenario:**
```javascript
var x = "\0";             // String representation of "NULL"
$.writeln("x is: " + x);  // Write the value of `x` to the Debug Console: does nothing
$.bp();                   // Ask the debugger to break: the Variables view will show an error
```

**Workaround:**  
Encode the data using one of these methods:
- `encodeURI()`
- `toSource()`
- A `btoa()` polyfill

**Example:**
```javascript
var x = encodeURI("\0");  // Encoded string representation of "NULL"
$.writeln("x is: " + x);  // Write the value of `x` to the Debug Console: prints "x is: %00"
$.bp();                   // Ask the debugger to break: the Variables view works as expected
```

**Note:** This issue is present in all ExtendScript debuggers, including the original ESTK.

# Frequently Asked Questions

## Can debug sessions or the Evaluate Script in Host... command be configured to launch the host application?
The ExtendScript Debugger extension does not currently support launching host applications.

## How do I halt evaluation of a script that wasn't started from VS Code?
There are currently two options:

1. Connect an attach mode debug session to the host engine within which the script is evaluating. Once connected:
   - Use the "Stop" debug action to simultaneously end the debug session and halt the script
   - The "Disconnect" button can be converted into a "Stop" button by holding the Alt/option key

2. Attempt to evaluate a script (e.g. with a command or by starting a launch mode debug session) in the host engine within which the script is evaluating. The active evaluation will be detected and you will be offered the option to halt the active evaluation.
