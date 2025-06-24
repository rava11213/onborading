"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

export default function MissingItemsPanel() {
  // This would be populated with actual missing items data
  const missingItems: string[] = []

  return (
    <Card className="fixed top-4 right-4 w-80 max-h-96 overflow-y-auto shadow-lg z-20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Missing Items
        </CardTitle>
      </CardHeader>
      <CardContent>
        {missingItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-sm">No missing items detected</div>
            <div className="text-xs mt-1">All tracked equipment is accounted for</div>
          </div>
        ) : (
          <div className="space-y-2">
            {missingItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-red-50 rounded border border-red-200"
              >
                <span className="text-sm font-medium text-red-800">{item}</span>
                <Badge variant="destructive" className="text-xs">
                  Missing
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
