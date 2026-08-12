import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { CourseGroup } from "./CourseGroup";
import { courseGroups } from "./popular-courses.data";

export function PopularCoursesSection() {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const handleToggleGroup = (groupId: string) => {
    setExpandedGroups((current) => ({
      ...current,
      [groupId]: !current[groupId],
    }));
  };

  return (
    <Section id="courses" className="bg-white/60">
      <Container>
        <div>
          {courseGroups.map((group) => (
            <CourseGroup
              key={group.id}
              group={group}
              isExpanded={Boolean(expandedGroups[group.id])}
              onToggle={handleToggleGroup}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
