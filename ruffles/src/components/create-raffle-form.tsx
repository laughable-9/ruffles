"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Upload, 
  Plus, 
  Calendar, 
  Ticket, 
  DollarSign, 
  Trophy,
  Clock,
  Users,
  CheckCircle,
  AlertCircle
} from "lucide-react"

interface CreateRaffleFormProps {
  onClose?: () => void
}

export function CreateRaffleForm({ onClose }: CreateRaffleFormProps) {
  // Add professional scrollbar styles
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .raffle-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .raffle-scrollbar::-webkit-scrollbar-track {
        background: rgba(51, 65, 85, 0.3);
        border-radius: 3px;
      }
      .raffle-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #eab308 0%, #ca8a04 100%);
        border-radius: 3px;
        transition: background 0.2s ease;
      }
      .raffle-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%);
      }
      .raffle-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #eab308 rgba(51, 65, 85, 0.3);
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prizeType: "NFT" as "NFT" | "Token",
    prizeValue: "",
    prizeImage: null as File | null,
    totalTickets: "",
    ticketPrice: "",
    currency: "APT" as "APT" | "GUI",
    duration: "",
    durationType: "hours" as "hours" | "days",
    maxTicketsPerUser: "",
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, prizeImage: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const validateStep = (stepNumber: number) => {
    const newErrors: {[key: string]: string} = {}
    
    if (stepNumber === 1) {
      if (!formData.title.trim()) newErrors.title = "Title is required"
      if (!formData.description.trim()) newErrors.description = "Description is required"
      if (!formData.prizeValue.trim()) newErrors.prizeValue = "Prize value is required"
      if (formData.prizeType === "NFT" && !formData.prizeImage) newErrors.prizeImage = "Prize image is required for NFTs"
    }
    
    if (stepNumber === 2) {
      if (!formData.totalTickets || parseInt(formData.totalTickets) < 1) newErrors.totalTickets = "Total tickets must be at least 1"
      if (!formData.ticketPrice || parseFloat(formData.ticketPrice) <= 0) newErrors.ticketPrice = "Ticket price must be greater than 0"
      if (!formData.duration || parseInt(formData.duration) < 1) newErrors.duration = "Duration must be at least 1"
      if (!formData.maxTicketsPerUser || parseInt(formData.maxTicketsPerUser) < 1) newErrors.maxTicketsPerUser = "Max tickets per user must be at least 1"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 3))
    }
  }

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (validateStep(2)) {
      // Here you would typically submit to your backend
      console.log("Raffle created:", formData)
      setStep(3) // Success step
    }
  }

  const calculateGuiPrice = (aptPrice: string) => {
    const apt = parseFloat(aptPrice) || 0
    const gui = apt * 1362000
    if (gui >= 1000000) return `${(gui / 1000000).toFixed(1)}M GUI`
    if (gui >= 1000) return `${(gui / 1000).toFixed(0)}K GUI`
    return `${gui.toFixed(0)} GUI`
  }

  if (step === 3) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-800 border-slate-700">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Raffle Created!</h3>
            <p className="text-slate-300 mb-6">
              Your raffle "{formData.title}" has been successfully created and is now live.
            </p>
            <Button 
              onClick={onClose}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold"
            >
              View My Raffle
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-slate-800 border-slate-700 max-h-[90vh] overflow-hidden">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-white">Create New Raffle</CardTitle>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          {/* Progress indicator */}
          <div className="flex items-center gap-4 mt-4">
            {[1, 2].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= stepNum 
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' 
                    : 'bg-slate-600 text-slate-400'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 2 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > stepNum ? 'bg-yellow-500' : 'bg-slate-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardHeader>

        <div className="overflow-y-auto raffle-scrollbar" style={{ maxHeight: 'calc(90vh - 140px)' }}>
          <CardContent className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Prize Details</h3>
              
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Raffle Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="e.g., 5M $GUI Tokens"
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-500 focus:outline-none"
                />
                {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe your raffle prize and any special details..."
                  rows={3}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-500 focus:outline-none resize-none raffle-scrollbar"
                />
                {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* Prize Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Prize Type *
                </label>
                <div className="flex gap-4">
                  {[
                    { value: "NFT", icon: Trophy, label: "NFT Collection" },
                    { value: "Token", icon: DollarSign, label: "Token Amount" }
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => handleInputChange("prizeType", type.value)}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        formData.prizeType === type.value
                          ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                          : 'border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <type.icon className="w-6 h-6 mx-auto mb-2" />
                      <span className="font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prize Value */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Prize Value *
                </label>
                <input
                  type="text"
                  value={formData.prizeValue}
                  onChange={(e) => handleInputChange("prizeValue", e.target.value)}
                  placeholder={formData.prizeType === "NFT" ? "e.g., GUI Gang #1234" : "e.g., 5000000"}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-500 focus:outline-none"
                />
                {errors.prizeValue && <p className="text-red-400 text-sm mt-1">{errors.prizeValue}</p>}
              </div>

              {/* Prize Image (for NFTs) */}
              {formData.prizeType === "NFT" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Prize Image *
                  </label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-slate-500 transition-colors">
                    {imagePreview ? (
                      <div className="space-y-4">
                        <img 
                          src={imagePreview} 
                          alt="Prize preview" 
                          className="w-32 h-32 object-cover rounded-lg mx-auto"
                        />
                        <Button
                          variant="outline"
                          onClick={() => document.getElementById('image-upload')?.click()}
                          className="border-slate-600 text-slate-300 hover:text-white"
                        >
                          Change Image
                        </Button>
                      </div>
                    ) : (
                      <div 
                        className="cursor-pointer"
                        onClick={() => document.getElementById('image-upload')?.click()}
                      >
                        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-300 font-medium">Upload Prize Image</p>
                        <p className="text-slate-500 text-sm">PNG, JPG up to 10MB</p>
                      </div>
                    )}
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  {errors.prizeImage && <p className="text-red-400 text-sm mt-1">{errors.prizeImage}</p>}
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Raffle Settings</h3>
              
              {/* Total Tickets */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Total Tickets *
                </label>
                <div className="relative">
                  <Ticket className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    value={formData.totalTickets}
                    onChange={(e) => handleInputChange("totalTickets", e.target.value)}
                    placeholder="e.g., 500"
                    min="1"
                    className="w-full pl-10 pr-3 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-500 focus:outline-none"
                  />
                </div>
                {errors.totalTickets && <p className="text-red-400 text-sm mt-1">{errors.totalTickets}</p>}
              </div>

              {/* Ticket Price & Currency */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Ticket Price *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.ticketPrice}
                    onChange={(e) => handleInputChange("ticketPrice", e.target.value)}
                    placeholder="0.5"
                    min="0"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-500 focus:outline-none"
                  />
                  {errors.ticketPrice && <p className="text-red-400 text-sm mt-1">{errors.ticketPrice}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Currency *
                  </label>
                  <div className="flex gap-2">
                    {[
                      { value: "APT", label: "$APT" },
                      { value: "GUI", label: "$GUI" }
                    ].map((curr) => (
                      <button
                        key={curr.value}
                        onClick={() => handleInputChange("currency", curr.value)}
                        className={`flex-1 p-3 rounded-lg font-medium transition-all ${
                          formData.currency === curr.value
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
                            : 'bg-slate-700 border border-slate-600 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        {curr.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Conversion Display */}
              {formData.ticketPrice && (
                <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                  <p className="text-slate-300 text-sm">
                    Ticket Price: <span className="text-white font-semibold">
                      {formData.ticketPrice} {formData.currency}
                    </span>
                    {formData.currency === "APT" && (
                      <span className="text-slate-400"> ≈ {calculateGuiPrice(formData.ticketPrice)}</span>
                    )}
                  </p>
                </div>
              )}

              {/* Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Duration *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      value={formData.duration}
                      onChange={(e) => handleInputChange("duration", e.target.value)}
                      placeholder="24"
                      min="1"
                      className="w-full pl-10 pr-3 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  {errors.duration && <p className="text-red-400 text-sm mt-1">{errors.duration}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Time Unit *
                  </label>
                  <select
                    value={formData.durationType}
                    onChange={(e) => handleInputChange("durationType", e.target.value)}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none"
                  >
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                  </select>
                </div>
              </div>

              {/* Max Tickets Per User */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Max Tickets Per User *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    value={formData.maxTicketsPerUser}
                    onChange={(e) => handleInputChange("maxTicketsPerUser", e.target.value)}
                    placeholder="50"
                    min="1"
                    className="w-full pl-10 pr-3 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-yellow-500 focus:outline-none"
                  />
                </div>
                {errors.maxTicketsPerUser && <p className="text-red-400 text-sm mt-1">{errors.maxTicketsPerUser}</p>}
                <p className="text-slate-500 text-sm mt-1">
                  Recommended: 10% of total tickets ({Math.floor(parseInt(formData.totalTickets) * 0.1) || 0} tickets)
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
            <Button
              variant="outline"
              onClick={step === 1 ? onClose : prevStep}
              className="border-slate-600 text-black bg-white hover:bg-gray-100 hover:text-gray-600"
            >
              {step === 1 ? "Cancel" : "Previous"}
            </Button>
            
            <Button
              onClick={step === 2 ? handleSubmit : nextStep}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8"
            >
              {step === 2 ? "Create Raffle" : "Next"}
            </Button>
          </div>
        </CardContent>
        </div>
      </Card>
    </div>
  )
}
