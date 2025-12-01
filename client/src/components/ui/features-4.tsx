import { FeaturesSectionWithHoverEffects } from './feature-section-with-hover-effects'
import { AnimatedBadge } from '@/components/ui/animated-badge'

export function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-12">
                    <div className="flex justify-center mb-8">
                        <AnimatedBadge
                            text="Porque Exdot"
                            color="#4747F3"
                        />
                    </div>
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">The foundation for creative teams management</h2>
                    <p>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>
            </div>

            <FeaturesSectionWithHoverEffects />
        </section>
    )
}
