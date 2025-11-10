
"use client";

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Filters from './components/Filters';
import SchoolList from './components/SchoolList';
import SchoolDetailModal from './components/SchoolDetailModal';
import { schoolData } from './mock/schoolData';

const Map = dynamic(() => import('./components/Map'), { ssr: false });

// Define the School type
interface School {
    name: string;
    type: 'Primary' | 'Secondary' | 'Combined';
    sector: 'Government' | 'Catholic' | 'Independent';
    rating: number;
    enrollment: number;
    distance: number;
    address: string;
    phone: string;
    website: string;
    naplanReading: number;
    naplanNumeracy: number;
    naplanWriting: number;
    naplanSpelling: number;
    naplanGrammar: number;
    icsea: number;
    teacherQualifications: number;
    studentTeacherRatio: number;
    specialPrograms: string[];
    facilities: string[];
    languages: string[];
    lat: number;
    lng: number;
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'School District Finder',
    description: 'Find and compare school districts for property locations. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

export default function SchoolDistrictFinder() {
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
    const [schoolType, setSchoolType] = useState('all');
    const [maxDistance, setMaxDistance] = useState(10);
    const [minRating, setMinRating] = useState(80);

    const filteredSchools = useMemo(() => {
        return (schoolData as School[]).filter(school => {
            return (
                (schoolType === 'all' || school.type === schoolType) &&
                school.distance <= maxDistance &&
                school.rating >= minRating
            );
        });
    }, [schoolType, maxDistance, minRating]);

    const handleFilterChange = () => {
        // This function is just a placeholder for the button's onClick
        // The actual filtering is done by the useMemo hook
    };

    const getNaplanPerformance = (score: number) => {
        if (score > 90) return { level: 'Excellent', color: 'text-green-600' };
        if (score > 75) return { level: 'Good', color: 'text-blue-600' };
        if (score > 60) return { level: 'Average', color: 'text-yellow-600' };
        return { level: 'Needs Improvement', color: 'text-red-600' };
    };

    const getRatingColor = (rating: number) => {
        if (rating > 90) return 'text-green-500';
        if (rating > 80) return 'text-blue-500';
        if (rating > 70) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="h-screen bg-gray-100 p-4 flex flex-col space-y-4">
            <Filters 
                schoolType={schoolType}
                setSchoolType={setSchoolType}
                maxDistance={maxDistance}
                setMaxDistance={setMaxDistance}
                minRating={minRating}
                setMinRating={setMinRating}
                handleFilterChange={handleFilterChange}
            />
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
                <div className="md:col-span-1 h-full">
                    <SchoolList 
                        schools={filteredSchools}
                        selectedSchool={selectedSchool}
                        setSelectedSchool={setSelectedSchool}
                        getRatingColor={getRatingColor}
                    />
                </div>
                <div className="md:col-span-2 h-full">
                    <Map 
                        schools={filteredSchools} 
                        selectedSchool={selectedSchool} 
                        setSelectedSchool={setSelectedSchool} 
                    />
                </div>
            </div>
            {selectedSchool && (
                <SchoolDetailModal 
                    selectedSchool={selectedSchool} 
                    setSelectedSchool={setSelectedSchool} 
                    getNaplanPerformance={getNaplanPerformance}
                    getRatingColor={getRatingColor}
                />
            )}
        </div>
    );
}