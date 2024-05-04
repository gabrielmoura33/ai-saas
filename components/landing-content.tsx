'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const testimonials = [
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Software Engineer',
    description: "This is the best application I've used!",
  },
  {
    name: 'Sarah',
    avatar: 'S',
    title: 'Marketing Specialist',
    description:
      'The user interface is so intuitive and easy to navigate. Highly recommend!',
  },
  {
    name: 'Jin',
    avatar: 'J',
    title: 'Product Manager',
    description:
      "This app has significantly improved our team's productivity. It's a game changer!",
  },
  {
    name: 'Emma',
    avatar: 'E',
    title: 'Data Analyst',
    description:
      'I love how this app simplifies complex processes. It saves me a lot of time!',
  },
  {
    name: 'Carlos',
    avatar: 'C',
    title: 'Entrepreneur',
    description:
      'A versatile tool that adapts to various business needs. Absolutely essential for my startup!',
  },
]

export function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grod-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
