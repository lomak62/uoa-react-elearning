/**
 * StyledParagraphs.tsx
 *
 * Τρία custom styled <p> components:
 * 1. HeroParagraph - για το hero section
 * 2. FeatureText - για το κείμενο των feature cards
 * 3. TestimonialQuote - για το κείμενο των testimonials
 */

import styled from "styled-components"

/* 1. HeroParagraph - για το hero section
   ========================================================================== */
export const HeroParagraph = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: clamp(1.25rem, 2.5vw, 1.5rem); /* Responsive font size με χρήση clamp */
  line-height: 1.8;
  color: #e8e4df;
  letter-spacing: 0.02em;
  margin: 0;
`

/* 2. FeatureText - για το κείμενο των feature cards
   ========================================================================== */
export const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #d4d0c8;
  margin: 0;
`

/* 3. TestimonialQuote - για το κείμενο των testimonials
   ========================================================================== */
export const TestimonialQuote = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1.9;
  color: #c9c5bd;
  margin: 0;
`
