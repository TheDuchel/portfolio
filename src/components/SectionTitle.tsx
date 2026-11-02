type SectionTitleProps = {
    title: string
    subtitle?: string   // le ? veut dire optionnel
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
    )
}