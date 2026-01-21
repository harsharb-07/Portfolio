"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/portfolio';
import {
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiOpencv,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiGit,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiAmazon,
    SiUbuntu,
    SiSupabase,
    SiTypescript,
    SiExpress,
    SiKeras,
    SiGithub,
    SiBootstrap,
    SiHuggingface,
    SiPlotly,
    SiTableau,
    SiFlask,
    SiDjango,
    SiSalesforce
} from 'react-icons/si';
import { FaMicrochip, FaCode, FaBrain, FaImage, FaJava, FaRobot, FaChartBar } from 'react-icons/fa';
import { IconType } from 'react-icons';

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: skills.languages,
            isTools: true
        },
        {
            title: "Front-End Technologies",
            skills: skills.frontend,
            isTools: true
        },
        {
            title: "AI - ML",
            skills: skills.aiml,
            isTools: true
        },
        {
            title: "Back-End Technologies",
            skills: skills.backend,
            isTools: true
        },
        {
            title: "Database & Cloud",
            skills: skills.databaseCloud,
            isTools: true
        },
        {
            title: "DevOps & Tools",
            skills: skills.devopsTools,
            isTools: true
        },
        {
            title: "Data Visualization",
            skills: skills.dataVisualization,
            isTools: true
        },
        {
            title: "Other",
            skills: skills.other,
            isTools: true
        }
    ];

    return (
        <section id="skills" ref={ref} className="section relative overflow-hidden">

            <div className="relative z-10">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="section-title"
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Technologies and tools I work with
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                            className="card"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b-2 border-gradient-to-r from-blue-500 to-purple-500" style={{ borderImage: 'linear-gradient(to right, #3b82f6, #8b5cf6) 1' }}>
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-3 gap-4">
                                {category.isTools ? (
                                    category.skills.map((tool: string, index: number) => {
                                        // Map tool names to their official icons and colors
                                        const getToolIcon = (name: string): IconType => {
                                            const iconMap: { [key: string]: IconType } = {
                                                // Programming Languages
                                                'Python': SiPython,
                                                'Java': FaJava,
                                                'JavaScript': SiJavascript,
                                                'TypeScript': SiTypescript,
                                                // Frontend
                                                'React': SiReact,
                                                'Next.js': SiNextdotjs,
                                                'HTML5': SiHtml5,
                                                'CSS3': SiCss3,
                                                'Bootstrap': SiBootstrap,
                                                // AI/ML
                                                'Hugging Face': SiHuggingface,
                                                'TensorFlow': SiTensorflow,
                                                'PyTorch': SiPytorch,
                                                'Keras': SiKeras,
                                                'Scikit-learn': SiScikitlearn,
                                                'NumPy': SiNumpy,
                                                'Pandas': SiPandas,
                                                'OpenCV': SiOpencv,
                                                // Backend
                                                'Node.js': SiNodedotjs,
                                                'Express.js': SiExpress,
                                                'Flask': SiFlask,
                                                'Django': SiDjango,
                                                // Database & Cloud
                                                'MongoDB': SiMongodb,
                                                'MySQL': SiMysql,
                                                'AWS': SiAmazon,
                                                // DevOps & Tools
                                                'Git': SiGit,
                                                'GitHub': SiGithub,
                                                // Data Visualization
                                                'Matplotlib': FaChartBar,
                                                'Seaborn': FaChartBar,
                                                'Plotly': SiPlotly,
                                                'Tableau': SiTableau,
                                                // Other
                                                'Salesforce': SiSalesforce,
                                            };
                                            return iconMap[name] || FaCode;
                                        };

                                        const getToolColor = (name: string): string => {
                                            const colorMap: { [key: string]: string } = {
                                                // Programming Languages
                                                'Python': '#3776AB',
                                                'Java': '#007396',
                                                'JavaScript': '#F7DF1E',
                                                'TypeScript': '#3178C6',
                                                // Frontend
                                                'React': '#61DAFB',
                                                'Next.js': '#000000',
                                                'HTML5': '#E34F26',
                                                'CSS3': '#1572B6',
                                                'Bootstrap': '#7952B3',
                                                // AI/ML
                                                'Hugging Face': '#FFD21E',
                                                'TensorFlow': '#FF6F00',
                                                'PyTorch': '#EE4C2C',
                                                'Keras': '#D00000',
                                                'Scikit-learn': '#F7931E',
                                                'NumPy': '#013243',
                                                'Pandas': '#150458',
                                                'OpenCV': '#5C3EE8',
                                                // Backend
                                                'Node.js': '#339933',
                                                'Express.js': '#000000',
                                                'Flask': '#000000',
                                                'Django': '#092E20',
                                                // Database & Cloud
                                                'MongoDB': '#47A248',
                                                'MySQL': '#4479A1',
                                                'AWS': '#FF9900',
                                                // DevOps & Tools
                                                'Git': '#F05032',
                                                'GitHub': '#181717',
                                                // Data Visualization
                                                'Matplotlib': '#11557C',
                                                'Seaborn': '#4C72B0',
                                                'Plotly': '#3F4F75',
                                                'Tableau': '#E97627',
                                                // Other
                                                'Salesforce': '#00A1E0',
                                            };
                                            return colorMap[name] || '#60A5FA';
                                        };

                                        const ToolIcon = getToolIcon(tool);

                                        return (
                                            <motion.div
                                                key={tool}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 0.3 + categoryIndex * 0.1 + index * 0.05 }}
                                                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                title={tool}
                                            >
                                                <ToolIcon className="text-4xl mb-2 transition-all duration-300" style={{ color: getToolColor(tool) }} />
                                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">{tool}</span>
                                            </motion.div>
                                        );
                                    })
                                ) : (
                                    category.skills.map((skill: string, index: number) => {
                                        // Handle both string and object types
                                        const skillName = skill;

                                        // Map skill names to their official icons and colors
                                        const getSkillIcon = (name: string): IconType => {
                                            const iconMap: { [key: string]: IconType } = {
                                                'Python': SiPython,
                                                'JavaScript': SiJavascript,
                                                'Java': FaJava,
                                                'TypeScript': SiTypescript,
                                                'TensorFlow': SiTensorflow,
                                                'PyTorch': SiPytorch,
                                                'Keras': SiKeras,
                                                'Scikit-learn': SiScikitlearn,
                                                'NumPy': SiNumpy,
                                                'Pandas': SiPandas,
                                                'Hugging Face': SiHuggingface,
                                                'OpenCV': SiOpencv,
                                                'GANs': FaBrain,
                                                'CNN': FaBrain,
                                                'Image Processing': FaImage,
                                                'React': SiReact,
                                                'Next.js': SiNextdotjs,
                                                'HTML5': SiHtml5,
                                                'CSS3': SiCss3,
                                                'Bootstrap': SiBootstrap,
                                                'Node.js': SiNodedotjs,
                                                'Express.js': SiExpress,
                                            };
                                            return iconMap[name] || SiPython; // Default icon
                                        };

                                        const getSkillColor = (name: string): string => {
                                            const colorMap: { [key: string]: string } = {
                                                'Python': '#3776AB',
                                                'JavaScript': '#F7DF1E',
                                                'Java': '#007396',
                                                'TypeScript': '#3178C6',
                                                'TensorFlow': '#FF6F00',
                                                'PyTorch': '#EE4C2C',
                                                'Keras': '#D00000',
                                                'Scikit-learn': '#F7931E',
                                                'NumPy': '#013243',
                                                'Pandas': '#150458',
                                                'Hugging Face': '#FFD21E',
                                                'OpenCV': '#5C3EE8',
                                                'GANs': '#8B5CF6',
                                                'CNN': '#6366F1',
                                                'Image Processing': '#EC4899',
                                                'React': '#61DAFB',
                                                'Next.js': '#000000',
                                                'HTML5': '#E34F26',
                                                'CSS3': '#1572B6',
                                                'Bootstrap': '#7952B3',
                                                'Node.js': '#339933',
                                                'Express.js': '#000000',
                                            };
                                            return colorMap[name] || '#3776AB';
                                        };

                                        const SkillIcon = getSkillIcon(skillName);

                                        return (
                                            <motion.div
                                                key={skillName}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 0.3 + categoryIndex * 0.1 + index * 0.05 }}
                                                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                title={skillName}
                                            >
                                                <SkillIcon className="text-4xl mb-2 transition-all duration-300" style={{ color: getSkillColor(skillName) }} />
                                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">{skillName}</span>
                                            </motion.div>
                                        );
                                    })
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
