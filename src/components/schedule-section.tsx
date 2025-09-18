import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ScheduleSection() {
  const schedule = [
    {
      day: "Poniedziałek",
      classes: [
        { time: "07:00", name: "Crossfit", instructor: "Anna K." },
        { time: "12:00", name: "Yoga", instructor: "Maria S." },
        { time: "18:00", name: "HIIT", instructor: "Tomasz W." },
        { time: "19:30", name: "Pilates", instructor: "Kasia M." },
      ],
    },
    {
      day: "Wtorek",
      classes: [
        { time: "06:30", name: "Fitness", instructor: "Paweł R." },
        { time: "12:30", name: "Zumba", instructor: "Ola T." },
        { time: "17:00", name: "Crossfit", instructor: "Anna K." },
        { time: "19:00", name: "Stretching", instructor: "Maria S." },
      ],
    },
    {
      day: "Środa",
      classes: [
        { time: "07:00", name: "HIIT", instructor: "Tomasz W." },
        { time: "12:00", name: "Pilates", instructor: "Kasia M." },
        { time: "18:00", name: "Fitness", instructor: "Paweł R." },
        { time: "19:30", name: "Yoga", instructor: "Maria S." },
      ],
    },
    {
      day: "Czwartek",
      classes: [
        { time: "06:30", name: "Crossfit", instructor: "Anna K." },
        { time: "12:30", name: "HIIT", instructor: "Tomasz W." },
        { time: "17:00", name: "Zumba", instructor: "Ola T." },
        { time: "19:00", name: "Pilates", instructor: "Kasia M." },
      ],
    },
    {
      day: "Piątek",
      classes: [
        { time: "07:00", name: "Fitness", instructor: "Paweł R." },
        { time: "12:00", name: "Stretching", instructor: "Maria S." },
        { time: "18:00", name: "Crossfit", instructor: "Anna K." },
        { time: "19:30", name: "HIIT", instructor: "Tomasz W." },
      ],
    },
  ]

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Harmonogram <span className="text-primary">zajęć</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Różnorodne zajęcia grupowe prowadzone przez doświadczonych instruktorów. Znajdź zajęcia idealne dla siebie!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {schedule.map((day, index) => (
            <Card key={index} className="bg-card border-border hover:border-secondary/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center text-secondary">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {day.classes.map((classItem, classIndex) => (
                    <div
                      key={classIndex}
                      className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer group"
                    >
                      <div className="text-sm font-semibold text-primary group-hover:text-primary/80">
                        {classItem.time}
                      </div>
                      <div className="font-medium text-card-foreground group-hover:text-primary">{classItem.name}</div>
                      <div className="text-sm text-muted-foreground">{classItem.instructor}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Weekend: Zajęcia na życzenie członków</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Crossfit", "Yoga", "HIIT", "Pilates", "Fitness", "Zumba", "Stretching"].map((activity) => (
              <span key={activity} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                {activity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
