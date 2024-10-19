import { title } from "@/components/primitives";
import { Avatar, Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/config/site";
import SectionLayout from "../layouts/section-layout";

const TestimonialSection = async () => {
  return (
    <SectionLayout id="testimonials" title="Testimonials">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {data.testimonials.map((t) => (
          <Card className="p-6 text-left" key={t.id}>
            <blockquote className="font-medium lg:text-og">
              &ldquo;{t.feedback}.&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <Avatar>
                <Image
                  height={50}
                  width={50}
                  alt="testimonial avatar"
                  src={t.avatar}
                />
              </Avatar>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t.title} @ {t.company}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default TestimonialSection;
