
import React from 'react';

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
