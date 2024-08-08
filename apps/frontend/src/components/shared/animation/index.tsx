'use client'
import { type FunctionComponent, type ComponentProps } from "react"
import { motion } from "framer-motion";

export type AnimationProps = ComponentProps<typeof motion.div>

/**
 * Simple wrapper to allow framer-motion used in a React Server Component
 * 
 * @param param0 
 * @returns 
 */
export const Animation : FunctionComponent<AnimationProps> = ({ children, ...props }) =>
{
    return <motion.div {...props}>{ children }</motion.div>
}

export default Animation