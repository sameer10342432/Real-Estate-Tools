'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, Save, FileDown, Share2, Lightbulb, GitCompare, Star } from 'lucide-react';
import {
  ScenarioManager,
  ExportButtons,
  ShareButton,
  SmartInsights,
  CalculationHistory,
  NotesPanel,
  ComparisonMatrix,
  FavoriteButton,
} from './index';
import { useCalculatorEnhancements } from '@/store/calculatorEnhancementsStore';

interface EnhancementDockProps {
  calculatorSlug: string;
  calculatorTitle: string;
  category?: string;
  currentInputs: Record<string, any>;
  currentResults: Array<{ label: string; value: number; isCurrency?: boolean }>;
  onLoadScenario?: (inputs: Record<string, any>) => void;
  position?: 'bottom' | 'side';
}

export const EnhancementDock: React.FC<EnhancementDockProps> = ({
  calculatorSlug,
  calculatorTitle,
  category = 'Real Estate',
  currentInputs,
  currentResults,
  onLoadScenario,
  position = 'bottom',
}) => {
  const [activeTab, setActiveTab] = useState('scenarios');
  const { addToHistory } = useCalculatorEnhancements();
  const [notes, setNotes] = useState('');

  // Save current calculation to history
  const handleSaveToHistory = () => {
    addToHistory({
      calculatorSlug,
      calculatorTitle,
      inputs: currentInputs,
      results: currentResults,
    });
  };

  const containerClass = position === 'side' 
    ? 'w-full lg:w-96 lg:sticky lg:top-4'
    : 'w-full mt-8';

  return (
    <div className={containerClass}>
      <Card className="border-2 border-blue-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-600" />
              Enhanced Features
            </CardTitle>
            <FavoriteButton slug={calculatorSlug} title={calculatorTitle} category={category} />
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 gap-1 mb-4">
              <TabsTrigger value="scenarios" className="text-xs">
                <Save className="h-3 w-3 mr-1" />
                Scenarios
              </TabsTrigger>
              <TabsTrigger value="history" className="text-xs">
                <History className="h-3 w-3 mr-1" />
                History
              </TabsTrigger>
              <TabsTrigger value="insights" className="text-xs">
                <Lightbulb className="h-3 w-3 mr-1" />
                Insights
              </TabsTrigger>
              <TabsTrigger value="export" className="text-xs">
                <FileDown className="h-3 w-3 mr-1" />
                Export
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scenarios" className="space-y-4">
              <ScenarioManager
                calculatorSlug={calculatorSlug}
                calculatorTitle={calculatorTitle}
                currentInputs={currentInputs}
                currentResults={currentResults}
                onLoadScenario={onLoadScenario || (() => {})}
              />
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Button 
                onClick={handleSaveToHistory}
                className="w-full mb-3"
                variant="outline"
                size="sm"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Current Calculation
              </Button>
              <CalculationHistory
                calculatorSlug={calculatorSlug}
                onLoadHistory={(inputs) => onLoadScenario?.(inputs)}
              />
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <SmartInsights 
                calculatorType={calculatorSlug}
                inputs={currentInputs}
                results={currentResults}
              />
              <NotesPanel
                notes={notes}
                onNotesChange={setNotes}
              />
            </TabsContent>

            <TabsContent value="export" className="space-y-4">
              <ExportButtons
                calculatorTitle={calculatorTitle}
                inputs={currentInputs}
                results={currentResults}
                notes={notes}
              />
              <ShareButton
                calculatorTitle={calculatorTitle}
                inputs={currentInputs}
                results={currentResults}
              />
              <div className="pt-3 border-t">
                <p className="text-xs text-gray-500 mb-2">Compare Multiple Scenarios:</p>
                <ComparisonMatrix calculatorSlug={calculatorSlug} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};