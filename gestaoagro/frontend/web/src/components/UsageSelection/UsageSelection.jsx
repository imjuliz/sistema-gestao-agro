"use client"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function OnboardingStep() {
    const [selected, setSelected] = useState("productivity")
    const options = [
        { value: "work", title: "Work Stuff", desc: "Just the usual boring work stuff I guess." },
        { value: "design", title: "UI/UX Design", desc: "Design apps and prototypes and things." },
        { value: "finance", title: "Finance", desc: "Because I need money to live my life?" },
        { value: "productivity", title: "Productivity", desc: "Sometimes we need to be productive." },
        { value: "engineering", title: "Engineering", desc: "Build web apps and MVPs with engineering power." },
        { value: "ml", title: "Machine Learning", desc: "To do machine learning and other robots stuff." },]

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold">
                What are you planning to use the app for?
            </h2>
            <RadioGroup value={selected} onValueChange={setSelected} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((opt) => (
                    <Label key={opt.value} htmlFor={opt.value}>
                        <Card className={`cursor-pointer transition ${selected === opt.value ? "border-primary ring-2 ring-primary" : ""}`} >
                            <CardHeader>
                                <CardTitle>{opt.title}</CardTitle>
                                <CardDescription>{opt.desc}</CardDescription>
                            </CardHeader>
                            <RadioGroupItem id={opt.value} value={opt.value} className="hidden" />
                        </Card>
                    </Label>))}
            </RadioGroup>
            {/* Indicador de progresso */}
            <div className="flex justify-between items-center">
                <Button variant="outline">Back</Button>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-muted" />
                    <div className="w-2 h-2 rounded-full bg-muted" />
                </div> <Button>Continue</Button>
            </div>
        </div>
    )
}