

export const createBackground = (colors: string[] | string | undefined, gradientType: "Linear" | "Conic" | undefined) => {
    switch (gradientType) {
      case 'Conic':
        return (colors instanceof Array && colors?.length !== 1) ? (`conic-gradient(
          from var(--border-angle), ${colors.join(', ')});`) : (colors?.toString())
      default:
        return (colors instanceof Array && colors?.length !== 1) ? (`linear-gradient(
           var(--border-angle), ${colors.join(', ')});`) : (colors?.toString())
    }
  }