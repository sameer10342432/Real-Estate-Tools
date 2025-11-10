"use client";

import { useState, useEffect, useCallback } from "react";
import type { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Palette,
  Home,
  Calculator,
  DollarSign,
  Lightbulb,
  CheckCircle,
  Sofa,
  Target,
} from "lucide-react";

interface RoomData {
  id: string;
  name: string;
  icon: React.ElementType;
  squareFootage: number;
  designStyle: string;
  designLevel: string;
  includeDesigner: boolean;
  includeFurniture: boolean;
  includeLighting: boolean;
  includeFlooring: boolean;
  includeWallTreatment: boolean;
  includeAccessories: boolean;
  customItems: CustomItem[];
}

interface CustomItem {
  id: string;
  name: string;
  cost: number;
  category: string;
}



interface RoomEstimate {
  roomId: string;
  roomName: string;
  totalCost: number;
  designerFee: number;
  materials: number;
  labor: number;
  furniture: number;
  lighting: number;
  flooring: number;
  wallTreatment: number;
  accessories: number;
  customItems: number;
}

interface CostBreakdown {
  designerFees: number;
  furniture: number;
  materials: number;
  labor: number;
  lighting: number;
  flooring: number;
  wallTreatment: number;
  accessories: number;
  customItems: number;
}


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interior Design Estimator',
    description: 'Estimate interior design and furnishing costs. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

export default function InteriorDesignEstimator() {
  const [results, setResults] = useState<any>(null);
  const [projectDetails, setProjectDetails] = useState({ projectType: '', timeline: '', location: '', budgetRange: '' });
  const [rooms, setRooms] = useState<RoomData[]>([
    {
      id: "living-room",
      name: "Living Room",
      icon: Sofa,
      squareFootage: 300,
      designStyle: "modern",
      designLevel: "mid-range",
      includeDesigner: true,
      includeFurniture: true,
      includeLighting: true,
      includeFlooring: false,
      includeWallTreatment: true,
      includeAccessories: true,
      customItems: [],
    },
  ]);

  const [activeRoom, setActiveRoom] = useState<string | null>(
    rooms.length > 0 ? rooms[0].id : null,
  );

  const designStyles = [
    { id: "modern", name: "Modern", multiplier: 1.2 },
    { id: "contemporary", name: "Contemporary", multiplier: 1.1 },
    { id: "traditional", name: "Traditional", multiplier: 1.0 },
    { id: "transitional", name: "Transitional", multiplier: 1.05 },
    { id: "scandinavian", name: "Scandinavian", multiplier: 0.95 },
    { id: "industrial", name: "Industrial", multiplier: 1.15 },
    { id: "bohemian", name: "Bohemian", multiplier: 0.9 },
    { id: "farmhouse", name: "Farmhouse", multiplier: 0.85 },
    { id: "luxury", name: "Luxury", multiplier: 2.0 },
    { id: "minimalist", name: "Minimalist", multiplier: 0.8 },
  ];

  const designLevels = [
    {
      id: "budget",
      name: "Budget-Friendly",
      multiplier: 0.6,
      description: "Basic updates and affordable options",
    },
    {
      id: "mid-range",
      name: "Mid-Range",
      multiplier: 1.0,
      description: "Quality materials and professional design",
    },
    {
      id: "high-end",
      name: "High-End",
      multiplier: 1.8,
      description: "Premium materials and luxury finishes",
    },
    {
      id: "luxury",
      name: "Luxury",
      multiplier: 3.0,
      description: "Designer brands and custom elements",
    },
  ];

  const roomTypes = [
    { id: "living-room", name: "Living Room", icon: Sofa },
    { id: "dining-room", name: "Dining Room", icon: Sofa },
    { id: "bedroom", name: "Bedroom", icon: Sofa },
    { id: "kitchen", name: "Kitchen", icon: Calculator },
    { id: "bathroom", name: "Bathroom", icon: Sofa },
    { id: "office", name: "Office", icon: Calculator },
    { id: "entryway", name: "Entryway", icon: Home },
  ];

  const addRoom = () => {
    const newRoomId = `room-${Date.now()}`;
    const newRoom: RoomData = {
      id: newRoomId,
      name: "New Room",
      icon: Home,
      squareFootage: 200,
      designStyle: "modern",
      designLevel: "mid-range",
      includeDesigner: true,
      includeFurniture: false,
      includeLighting: false,
      includeFlooring: false,
      includeWallTreatment: false,
      includeAccessories: false,
      customItems: [],
    };
    setRooms((prev) => [...prev, newRoom]);
    setActiveRoom(newRoomId);
  };

  const removeRoom = (roomId: string) => {
    setRooms((prev) => prev.filter((room) => room.id !== roomId));
    if (activeRoom === roomId) {
      setActiveRoom(rooms.length > 1 ? rooms[0].id : null);
    }
  };

  const updateRoom = (roomId: string, updates: Partial<RoomData>) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === roomId ? { ...room, ...updates } : room,
      ),
    );
  };

  const addCustomItem = (roomId: string) => {
    const newItem: CustomItem = {
      id: `custom-${Date.now()}`,
      name: "",
      cost: 0,
      category: "custom",
    };
    updateRoom(roomId, {
      customItems: [
        ...(rooms.find((r) => r.id === roomId)?.customItems || []),
        newItem,
      ],
    });
  };

  const updateCustomItem = (
    roomId: string,
    itemId: string,
    updates: Partial<CustomItem>,
  ) => {
    const room = rooms.find((r) => r.id === roomId);
    if (room) {
      const updatedItems = room.customItems.map((item) =>
        item.id === itemId ? { ...item, ...updates } : item,
      );
      updateRoom(roomId, { customItems: updatedItems });
    }
  };

  const removeCustomItem = (roomId: string, itemId: string) => {
    const room = rooms.find((r) => r.id === roomId);
    if (room) {
      const updatedItems = room.customItems.filter(
        (item) => item.id !== itemId,
      );
      updateRoom(roomId, { customItems: updatedItems });
    }
  };

  const calculateEstimate = useCallback(() => {

    let totalCost = 0;
    let totalDesignerFees = 0;
    let totalMaterialsCost = 0;
    let totalLaborCost = 0;
    let totalFurnitureCost = 0;
    const roomEstimates: RoomEstimate[] = [];

    const costBreakdown: CostBreakdown = {
      designerFees: 0,
      furniture: 0,
      materials: 0,
      labor: 0,
      lighting: 0,
      flooring: 0,
      wallTreatment: 0,
      accessories: 0,
      customItems: 0,
    };

    rooms.forEach((room) => {
      const style = designStyles.find((s) => s.id === room.designStyle) || {
        multiplier: 1.0,
      };
      const level = designLevels.find((l) => l.id === room.designLevel) || {
        multiplier: 1.0,
      };

      const baseCostPerSqFt = 80;
      const adjustedCostPerSqFt =
        baseCostPerSqFt * style.multiplier * level.multiplier;

      const roomTotal = room.squareFootage * adjustedCostPerSqFt;

      const roomEstimate: RoomEstimate = {
        roomId: room.id,
        roomName: room.name,
        totalCost: 0,
        designerFee: 0,
        materials: 0,
        labor: 0,
        furniture: 0,
        lighting: 0,
        flooring: 0,
        wallTreatment: 0,
        accessories: 0,
        customItems: 0,
      };

      if (room.includeFurniture) roomEstimate.furniture = roomTotal * 0.4;
      if (room.includeLighting) roomEstimate.lighting = roomTotal * 0.1;
      if (room.includeFlooring) roomEstimate.flooring = room.squareFootage * 15; // Avg $15/sqft
      if (room.includeWallTreatment)
        roomEstimate.wallTreatment = room.squareFootage * 5; // Avg $5/sqft
      if (room.includeAccessories) roomEstimate.accessories = roomTotal * 0.1;

      room.customItems.forEach(
        (item) => (roomEstimate.customItems += item.cost),
      );

      roomEstimate.materials =
        roomEstimate.lighting +
        roomEstimate.flooring +
        roomEstimate.wallTreatment;
      roomEstimate.labor =
        (roomEstimate.materials + roomEstimate.furniture) * 0.3;

      if (room.includeDesigner) {
        roomEstimate.designerFee =
          (roomEstimate.materials +
            roomEstimate.labor +
            roomEstimate.furniture) *
          0.2;
      }

      roomEstimate.totalCost =
        roomEstimate.designerFee +
        roomEstimate.materials +
        roomEstimate.labor +
        roomEstimate.furniture +
        roomEstimate.accessories +
        roomEstimate.customItems;

      roomEstimates.push(roomEstimate);

      totalCost += roomEstimate.totalCost;
      totalDesignerFees += roomEstimate.designerFee;
      totalMaterialsCost += roomEstimate.materials;
      totalLaborCost += roomEstimate.labor;
      totalFurnitureCost += roomEstimate.furniture;

      costBreakdown.designerFees += roomEstimate.designerFee;
      costBreakdown.furniture += roomEstimate.furniture;
      costBreakdown.materials += roomEstimate.materials;
      costBreakdown.labor += roomEstimate.labor;
      costBreakdown.lighting += roomEstimate.lighting;
      costBreakdown.flooring += roomEstimate.flooring;
      costBreakdown.wallTreatment += roomEstimate.wallTreatment;
      costBreakdown.accessories += roomEstimate.accessories;
      costBreakdown.customItems += roomEstimate.customItems;
    });

    const timeline = rooms.length * 4; // Estimated 4 weeks per room

    const recommendations = [
      "Consider using a project management tool to track progress.",
      "Get multiple quotes from contractors for labor costs.",
      "Purchase materials in bulk to potentially receive discounts.",
    ];

    if (totalCost > 100000) {
      recommendations.push(
        "Consider phasing the project over multiple years for better budget management",
      );
    }

    if (rooms.some((r) => r.designLevel === "luxury")) {
      recommendations.push(
        "For luxury projects, allow extra time for custom orders and installations",
      );
    }

    if (rooms.length > 5) {
      recommendations.push(
        "Large multi-room projects benefit from a cohesive design theme throughout",
      );
    }

    if (rooms.some((r) => r.includeFlooring)) {
      recommendations.push(
        "Schedule flooring installation before furniture delivery",
      );
    }

    recommendations.push("Get multiple quotes from contractors and suppliers");
    recommendations.push("Add 10-20% contingency budget for unexpected costs");

    setResults({
      roomEstimates,
      totalCost,
      designerFees: totalDesignerFees,
      materialsCost: totalMaterialsCost,
      laborCost: totalLaborCost,
      furnitureCost: totalFurnitureCost,
      timeline,
      costBreakdown,
      recommendations,
    });
  }, [rooms]);

  useEffect(() => {
    calculateEstimate();
  }, [calculateEstimate]);

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#84cc16",
  "#f97316",
];

return (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <Palette className="h-12 w-12 text-purple-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">
            Interior Design Estimator
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate comprehensive interior design costs with room-by-room
          analysis, style preferences, and detailed budget breakdowns for your
          home renovation project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                Design Project Details
              </CardTitle>
              <CardDescription>
                Configure your interior design project parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="project" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="project">Project</TabsTrigger>
                  <TabsTrigger value="rooms">Rooms</TabsTrigger>
                </TabsList>

                <TabsContent value="project" className="space-y-4">
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      value={projectDetails.projectType}
                      onValueChange={(value) =>
                        setProjectDetails((prev) => ({
                          ...prev,
                          projectType: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-renovation">
                          Full Home Renovation
                        </SelectItem>
                        <SelectItem value="partial-renovation">
                          Partial Renovation
                        </SelectItem>
                        <SelectItem value="refresh">Design Refresh</SelectItem>
                        <SelectItem value="staging">Home Staging</SelectItem>
                        <SelectItem value="new-construction">
                          New Construction
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Timeline Preference</Label>
                    <Select
                      value={projectDetails.timeline}
                      onValueChange={(value) =>
                        setProjectDetails((prev) => ({
                          ...prev,
                          timeline: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rushed">
                          Rushed (Premium pricing)
                        </SelectItem>
                        <SelectItem value="normal">Normal Timeline</SelectItem>
                        <SelectItem value="flexible">
                          Flexible (Cost savings)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location Type</Label>
                    <Select
                      value={projectDetails.location}
                      onValueChange={(value) =>
                        setProjectDetails((prev) => ({
                          ...prev,
                          location: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urban">Urban/City</SelectItem>
                        <SelectItem value="suburban">Suburban</SelectItem>
                        <SelectItem value="rural">Rural</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budgetRange">Budget Range</Label>
                    <Select
                      value={projectDetails.budgetRange}
                      onValueChange={(value) =>
                        setProjectDetails((prev) => ({
                          ...prev,
                          budgetRange: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget-Conscious</SelectItem>
                        <SelectItem value="moderate">
                          Moderate Budget
                        </SelectItem>
                        <SelectItem value="high-end">
                          High-End Budget
                        </SelectItem>
                        <SelectItem value="luxury">Luxury Budget</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={addRoom}
                      variant="outline"
                      className="w-full"
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Add Room
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="rooms" className="space-y-4">
                  <div className="space-y-2">
                    {rooms.map((room) => (
                      <div
                        key={room.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          activeRoom === room.id
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setActiveRoom(room.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <room.icon className="h-4 w-4 mr-2 text-purple-600" />
                            <span className="font-medium">{room.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">
                              {room.squareFootage} sq ft
                            </Badge>
                            {rooms.length > 1 && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeRoom(room.id);
                                }}
                                className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                              >
                                ×
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeRoom && (
                    <div className="space-y-4 pt-4 border-t">
                      {(() => {
                        const room = rooms.find((r) => r.id === activeRoom);
                        if (!room) return null;

                        return (
                          <>
                            <div>
                              <Label htmlFor="roomName">Room Name</Label>
                              <Select
                                value={room.name}
                                onValueChange={(value) => {
                                  const roomType = roomTypes.find(
                                    (rt) => rt.name === value,
                                  );
                                  updateRoom(room.id, {
                                    name: value,
                                    icon: roomType?.icon || Home,
                                  });
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {roomTypes.map((type) => (
                                    <SelectItem key={type.id} value={type.name}>
                                      {type.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="squareFootage">
                                Square Footage
                              </Label>
                              <Input
                                type="number"
                                value={room.squareFootage}
                                onChange={(e) =>
                                  updateRoom(room.id, {
                                    squareFootage: Number(e.target.value),
                                  })
                                }
                                placeholder="300"
                              />
                            </div>

                            <div>
                              <Label htmlFor="designStyle">Design Style</Label>
                              <Select
                                value={room.designStyle}
                                onValueChange={(value) =>
                                  updateRoom(room.id, { designStyle: value })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {designStyles.map((style) => (
                                    <SelectItem key={style.id} value={style.id}>
                                      {style.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="designLevel">Design Level</Label>
                              <Select
                                value={room.designLevel}
                                onValueChange={(value) =>
                                  updateRoom(room.id, { designLevel: value })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {designLevels.map((level) => (
                                    <SelectItem key={level.id} value={level.id}>
                                      <div>
                                        <div className="font-medium">
                                          {level.name}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                          {level.description}
                                        </div>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-3">
                              <Label>Services Included</Label>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="includeDesigner"
                                    checked={room.includeDesigner}
                                    onCheckedChange={(checked) =>
                                      updateRoom(room.id, {
                                        includeDesigner: !!checked,
                                      })
                                    }
                                  />
                                  <Label
                                    htmlFor="includeDesigner"
                                    className="text-sm"
                                  >
                                    Interior Designer Consultation
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="includeFurniture"
                                    checked={room.includeFurniture}
                                    onCheckedChange={(checked) =>
                                      updateRoom(room.id, {
                                        includeFurniture: !!checked,
                                      })
                                    }
                                  />
                                  <Label
                                    htmlFor="includeFurniture"
                                    className="text-sm"
                                  >
                                    Furniture & Decor
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="includeLighting"
                                    checked={room.includeLighting}
                                    onCheckedChange={(checked) =>
                                      updateRoom(room.id, {
                                        includeLighting: !!checked,
                                      })
                                    }
                                  />
                                  <Label
                                    htmlFor="includeLighting"
                                    className="text-sm"
                                  >
                                    Lighting Design
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="includeFlooring"
                                    checked={room.includeFlooring}
                                    onCheckedChange={(checked) =>
                                      updateRoom(room.id, {
                                        includeFlooring: !!checked,
                                      })
                                    }
                                  />
                                  <Label
                                    htmlFor="includeFlooring"
                                    className="text-sm"
                                  >
                                    Flooring Installation
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="includeWallTreatment"
                                    checked={room.includeWallTreatment}
                                    onCheckedChange={(checked) =>
                                      updateRoom(room.id, {
                                        includeWallTreatment: !!checked,
                                      })
                                    }
                                  />
                                  <Label
                                    htmlFor="includeWallTreatment"
                                    className="text-sm"
                                  >
                                    Wall Treatment/Paint
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="includeAccessories"
                                    checked={room.includeAccessories}
                                    onCheckedChange={(checked) =>
                                      updateRoom(room.id, {
                                        includeAccessories: !!checked,
                                      })
                                    }
                                  />
                                  <Label
                                    htmlFor="includeAccessories"
                                    className="text-sm"
                                  >
                                    Accessories & Art
                                  </Label>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Label>Custom Items</Label>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => addCustomItem(room.id)}
                                >
                                  Add Item
                                </Button>
                              </div>
                              {room.customItems.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center space-x-2"
                                >
                                  <Input
                                    placeholder="Item name"
                                    value={item.name}
                                    onChange={(e) =>
                                      updateCustomItem(room.id, item.id, {
                                        name: e.target.value,
                                      })
                                    }
                                    className="flex-1"
                                  />
                                  <Input
                                    type="number"
                                    placeholder="Cost"
                                    value={item.cost}
                                    onChange={(e) =>
                                      updateCustomItem(room.id, item.id, {
                                        cost: Number(e.target.value),
                                      })
                                    }
                                    className="w-24"
                                  />
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() =>
                                      removeCustomItem(room.id, item.id)
                                    }
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    ×
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              <Button onClick={calculateEstimate} className="w-full">
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Design Costs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="lg:col-span-2">
          {results ? (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Total Project Cost
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(results.totalCost)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Palette className="h-8 w-8 text-purple-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Designer Fees
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(results.designerFees)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Sofa className="h-8 w-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Furniture & Decor
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(results.furnitureCost)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Home className="h-8 w-8 text-orange-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Timeline
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {results.timeline} weeks
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="breakdown" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
                  <TabsTrigger value="rooms">Room Analysis</TabsTrigger>
                  <TabsTrigger value="charts">Visual Analysis</TabsTrigger>
                  <TabsTrigger value="recommendations">
                    Recommendations
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="breakdown" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Cost Breakdown</CardTitle>
                      <CardDescription>
                        Complete analysis of all project costs by category
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(results.costBreakdown).map(
                          ([category, amount]) => {
                            if (amount === 0) return null;
                            const percentage = (amount as number / results.totalCost) * 100;
                            return (
                              <div key={category} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium capitalize">
                                    {category.replace(/([A-Z])/g, " $1").trim()}
                                  </span>
                                  <div className="text-right">
                                    <span className="font-bold">
                                      {formatCurrency(amount as number)}
                                    </span>
                                    <span className="text-sm text-gray-500 ml-2">
                                      ({percentage.toFixed(1)}%)
                                    </span>
                                  </div>
                                </div>
                                <Progress value={percentage} className="h-2" />
                              </div>
                            );
                          },
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="rooms" className="space-y-4">
                  <div className="grid gap-4">
                    {results.roomEstimates.map((room: any) => (
                      <Card key={room.id}>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Home className="h-5 w-5 mr-2" />
                            {room.name}
                          </CardTitle>
                          <CardDescription>
                            Total Cost: {formatCurrency(room.totalCost)}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(room).map(([key, value]) => {
                              if (
                                key === "roomId" ||
                                key === "roomName" ||
                                key === "totalCost" ||
                                value === 0
                              )
                                return null;
                              return (
                                <div key={key} className="text-center">
                                  <p className="text-sm text-gray-600 capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </p>
                                  <p className="font-semibold">
                                    {formatCurrency(value as number)}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="charts" className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Cost Distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={Object.entries(results.costBreakdown)
                                .filter(([, amount]) => (amount as number) > 0)
                                .map(([category, amount]) => ({
                                  name: category
                                    .replace(/([A-Z])/g, " $1")
                                    .trim(),
                                  value: amount,
                                }))}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }: any) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                              }
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {Object.entries(results.costBreakdown).map(
                                (_, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                  />
                                ),
                              )}
                            </Pie>
                            <Tooltip
                              formatter={(value: number) =>
                                formatCurrency(value)
                              }
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Room Comparison</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={results.roomEstimates}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="roomName" />
                            <YAxis
                              tickFormatter={(value) =>
                                `$${(value / 1000).toFixed(0)}k`
                              }
                            />
                            <Tooltip
                              formatter={(value) =>
                                formatCurrency(value as number)
                              }
                            />
                            <Legend />
                            <Bar
                              dataKey="totalCost"
                              fill="#8884d8"
                              name="Total Cost"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2" />
                        Professional Recommendations
                      </CardTitle>
                      <CardDescription>
                        Expert advice to optimize your interior design project
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {results.recommendations.map(
                          (recommendation: any, index: number) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{recommendation}</p>
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Palette className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Ready to Calculate
                </h3>
                <p className="text-gray-600">
                  Configure your project details and rooms, then click
                  "Calculate Design Costs" to see your comprehensive interior
                  design estimate.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      </div>
    </div>
  );
}