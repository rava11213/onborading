"use client"

import { useState } from "react"
import FloorMap from "@/components/floor-map"
import Onboarding from "@/components/onboarding"
import MissingItemsPanel from "@/components/missing-items-panel"

export interface UserPreferences {
  assignedAreas: string[]
  trackedItems: string[]
  trackMissingItems: boolean
}

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    assignedAreas: [],
    trackedItems: [],
    trackMissingItems: false,
  })

  const handleOnboardingComplete = (preferences: UserPreferences) => {
    setUserPreferences(preferences)
    setShowOnboarding(false)
  }

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="relative">
        <FloorMap assignedAreas={userPreferences.assignedAreas} trackedItems={userPreferences.trackedItems} />
        {userPreferences.trackMissingItems && <MissingItemsPanel />}
      </div>
    </div>
  )
}
