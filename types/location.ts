export interface LocationData {
  name: string;
  county: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  population: string;
  landmarks: string[];
  history: string;
  heritage: {
    listedBuildings: {
      gradeI: string[];
      gradeII: string[];
      gradeIIStar: string[];
    };
    conservationAreas: string[];
    historicSites: {
      name: string;
      description: string;
      period: string;
      roofingFeatures: string[];
    }[];
  };
  roofingInfo: {
    commonStyles: string[];
    challenges: string[];
    regulations: string;
    materials: {
      traditional: string[];
      modern: string[];
      specializedSolutions: string[];
    };
    weatherConsiderations: {
      annualRainfall: string;
      windExposure: string;
      temperatureRange: string;
      commonIssues: string[];
    };
    buildingRegulations: {
      planningRequirements: string;
      conservationGuidelines: string;
      energyEfficiencyStandards: string;
      heritageRestrictions: string;
    };
  };
  nearbyAreas: string[];
  postalCodes: string[];
}
