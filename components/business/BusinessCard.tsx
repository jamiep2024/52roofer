import React from "react";
import { Business } from "../../types/business";
import {
  StarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  TrophyIcon,
  ClockIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import LeadForm from "../forms/LeadForm";

interface BusinessCardProps {
  business: Business;
}

interface BadgeStyle {
  bg: string;
  text: string;
  icon: JSX.Element;
}

type BadgeStyles = {
  [key: string]: BadgeStyle;
};

const getBadgeStyle = (badge: string, isGrandeur: boolean): BadgeStyle => {
  const styles: BadgeStyles = {
    Verified: {
      bg: isGrandeur ? "bg-gold/20" : "bg-emerald-100",
      text: isGrandeur ? "text-gold-dark" : "text-emerald-700",
      icon: <CheckBadgeIcon className="h-5 w-5 mr-2" />,
    },
    "Premium Partner": {
      bg: "bg-purple-100",
      text: "text-purple-700",
      icon: <TrophyIcon className="h-5 w-5 mr-2" />,
    },
    "20+ Years Experience": {
      bg: "bg-blue-100",
      text: "text-blue-700",
      icon: <BuildingOfficeIcon className="h-5 w-5 mr-2" />,
    },
    "Family Business": {
      bg: "bg-orange-100",
      text: "text-orange-700",
      icon: <UserGroupIcon className="h-5 w-5 mr-2" />,
    },
    "Commercial Certified": {
      bg: "bg-cyan-100",
      text: "text-cyan-700",
      icon: <BuildingOfficeIcon className="h-5 w-5 mr-2" />,
    },
    "Quick Response": {
      bg: "bg-rose-100",
      text: "text-rose-700",
      icon: <ClockIcon className="h-5 w-5 mr-2" />,
    },
  };

  return (
    styles[badge] || {
      bg: isGrandeur ? "bg-gold/20" : "bg-gray-100",
      text: isGrandeur ? "text-gold-dark" : "text-gray-700",
      icon: <CheckBadgeIcon className="h-5 w-5 mr-2" />,
    }
  );
};

export default function BusinessCard({ business }: BusinessCardProps) {
  const isGrandeur = business.name.startsWith("Grandeur Heritage Group");

  return (
    <div
      className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
        business.featured ? "border-2 border-accent ring-2 ring-accent/20" : ""
      }`}
    >
      {/* Featured Badge */}
      {business.featured && (
        <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-medium">
          Featured
        </div>
      )}

      {/* Trusted Banner for Grandeur */}
      {isGrandeur && (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-gold/20 text-gold-dark py-3 border-b border-gold/20">
          <ShieldCheckIcon className="h-7 w-7 mr-3 text-gold" />
          <span className="font-semibold text-base">Trusted Partner</span>
        </div>
      )}

      <div className={`p-8 ${isGrandeur ? "pt-16" : ""}`}>
        {/* Header Section */}
        <div className="flex flex-col space-y-3">
          <h3
            className={`font-bold text-gray-900 ${isGrandeur ? "text-3xl" : "text-2xl"}`}
          >
            {business.name}
          </h3>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(business.rating)
                      ? isGrandeur
                        ? "text-gold"
                        : "text-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {business.rating} ({business.reviewCount} reviews)
            </span>
          </div>
        </div>

        {/* Description & Badges */}
        <div className="mt-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            {business.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {business.badges.map((badge) => {
              let badgeStyle = "";
              let BadgeIcon = CheckBadgeIcon;

              if (business.featured) {
                // Premium listing badge styles
                switch (badge) {
                  case "Verified":
                    badgeStyle =
                      "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
                    BadgeIcon = CheckBadgeIcon;
                    break;
                  case "Premium Partner":
                    badgeStyle =
                      "bg-gradient-to-r from-purple-500 to-purple-700 text-white";
                    BadgeIcon = TrophyIcon;
                    break;
                  case "20+ Years Experience":
                    badgeStyle =
                      "bg-gradient-to-r from-blue-500 to-blue-700 text-white";
                    BadgeIcon = BuildingOfficeIcon;
                    break;
                  case "Quick Response":
                    badgeStyle =
                      "bg-gradient-to-r from-green-500 to-green-700 text-white";
                    BadgeIcon = ClockIcon;
                    break;
                  default:
                    badgeStyle = "bg-gray-100 text-gray-800";
                }
              } else {
                // Basic listing badge styles
                badgeStyle = "bg-gray-100 text-gray-800";
              }

              return (
                <span
                  key={badge}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${badgeStyle}`}
                >
                  <BadgeIcon className="w-4 h-4 mr-1" />
                  {badge}
                </span>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-8">
          <h4 className="text-lg font-medium text-gray-900 mb-3">Services:</h4>
          <div className="flex flex-wrap gap-3">
            {business.services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Business Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {business.location}
            </p>
            {business.availability && (
              <p className="text-gray-600">
                <span className="font-medium">Availability:</span>{" "}
                {business.availability}
              </p>
            )}
          </div>
          <div className="space-y-3">
            {business.responseTime && (
              <p className="text-gray-600">
                <span className="font-medium">Response Time:</span>{" "}
                {business.responseTime}
              </p>
            )}
            <p className="text-gray-600">
              <span className="font-medium">Coverage:</span> Full service area
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg ${
                business.featured
                  ? "text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call Now
            </a>
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {business.website && (
            <a
              href="https://www.grandeurheritageroofing.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg shadow-sm ${
                business.featured
                  ? "text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              <GlobeAltIcon
                className={`w-6 h-6 mr-2 ${business.featured ? "text-white" : "text-gray-500"}`}
              />
              Visit Website
            </a>
          )}
          {!business.featured && (
            <a
              href="mailto:52rooferteam@gmail.com?subject=Upgrade%20Account%20Request&body=I%20would%20like%20to%20upgrade%20my%20business%20listing"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-sm hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <StarIcon className="w-6 h-6 mr-2" />
              Upgrade Account
            </a>
          )}
        </div>

        {/* Lead Form for Grandeur Heritage */}
        {isGrandeur && (
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Request a Quote
            </h4>
            <LeadForm source={`Grandeur Heritage - ${business.location}`} />
          </div>
        )}
      </div>
    </div>
  );
}
