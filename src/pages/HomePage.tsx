import React from 'react';
import './HomePage.scss';

const HomePage: React.FC = () => {
    return (
        <div className="page home">
            <h1>Hello!</h1>
            <p>Welcome to my professional portfolio.</p>

            <section className="about-me">
                <h2>About Me</h2>

                <span>
                    <p>
                        Hi, I'm Kyle Nakamura, a software engineer with 7 years of experience in full-stack web development
                        and a lifelong passion for machine learning. Throughout my career, I've loved integrating machine
                        learning into web applications, bridging the gap between innovative algorithms and user-friendly
                        products.
                    </p>
                    <p>
                        I recently completed my Master's in Computer Science from Georgia Tech, specializing in machine
                        learning. This experience deepened my understanding of advanced ML techniques and their real-world
                        applications. I'm also an active contributor to the open-source community through projects like
                        mlrose-ky, where I overhauled and enhanced a popular machine learning package to improve its
                        performance and usability.
                    </p>
                    <p>
                        I'm excited to explore opportunities that allow me to work at the intersection of machine learning
                        research and product development. I'm open to roles such as software engineer, full-stack developer,
                        machine learning engineer, or data scientist/analyst, where I can apply my engineering expertise to
                        drive innovative machine learning projects.
                    </p>
                </span>

                <button>View my Resume</button>
            </section>

            <section className="recent-projects">
                <h2>My Most Recent Projects</h2>

                <div className="grid svelte-1jv44gf">
                    <a
                        className="repo-card svelte-1jv44gf"
                        href="https://github.com/knakamura13/react-vite-template"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>react-vite-template</h3>
                        <div className="github-stars-container svelte-1jv44gf">
                            <img
                                className="github-stars-icon svelte-1jv44gf"
                                src="icons/icon-yellow-star.svg"
                                alt="GitHub Stars Icon"
                            />{' '}
                            <span className="github-stars-count svelte-1jv44gf">0</span>
                        </div>
                        <p>
                            Convenient template for React + Vite projects, pre-configured with routing, state management,
                            styles, etc.
                        </p>
                    </a>
                    <a
                        className="repo-card svelte-1jv44gf"
                        href="https://github.com/knakamura13/react-kylenakamura-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>react-kylenakamura-website</h3>
                        <div className="github-stars-container svelte-1jv44gf">
                            <img
                                className="github-stars-icon svelte-1jv44gf"
                                src="icons/icon-yellow-star.svg"
                                alt="GitHub Stars Icon"
                            />{' '}
                            <span className="github-stars-count svelte-1jv44gf">0</span>
                        </div>
                        <p>React version of my personal website, https://kylenakamura.dev</p>
                    </a>
                    <a
                        className="repo-card svelte-1jv44gf"
                        href="https://github.com/knakamura13/svelte-kyle-nakamura-dev-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>svelte-kyle-nakamura-dev-website</h3>
                        <div className="github-stars-container svelte-1jv44gf">
                            <img
                                className="github-stars-icon svelte-1jv44gf"
                                src="icons/icon-yellow-star.svg"
                                alt="GitHub Stars Icon"
                            />{' '}
                            <span className="github-stars-count svelte-1jv44gf">1</span>
                        </div>
                        <p>
                            This SvelteKit project contains the frontend and backend of my personal website,
                            https://kylenakamura.dev.
                        </p>
                    </a>
                    <a
                        className="repo-card svelte-1jv44gf"
                        href="https://github.com/knakamura13/mlrose-ky"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>mlrose-ky</h3>
                        <div className="github-stars-container svelte-1jv44gf">
                            <img
                                className="github-stars-icon svelte-1jv44gf"
                                src="icons/icon-yellow-star.svg"
                                alt="GitHub Stars Icon"
                            />{' '}
                            <span className="github-stars-count svelte-1jv44gf">20</span>
                        </div>
                        <p>
                            A highly optimized fork of the popular mlrose-hiive package. For Machine Learning, Randomized
                            Optimization and SEarch algorithms.
                        </p>
                    </a>
                    <a
                        className="repo-card svelte-1jv44gf"
                        href="https://github.com/knakamura13/staged-recipes"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>staged-recipes</h3>
                        <div className="github-stars-container svelte-1jv44gf">
                            <img
                                className="github-stars-icon svelte-1jv44gf"
                                src="icons/icon-yellow-star.svg"
                                alt="GitHub Stars Icon"
                            />{' '}
                            <span className="github-stars-count svelte-1jv44gf">0</span>
                        </div>
                        <p>A place to submit conda recipes before they become fully fledged conda-forge feedstocks</p>
                    </a>
                    <a
                        className="repo-card svelte-1jv44gf"
                        href="https://github.com/knakamura13/cs7641-ml-study-materials-2023"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>cs7641-ml-study-materials-2023</h3>
                        <div className="github-stars-container svelte-1jv44gf">
                            <img
                                className="github-stars-icon svelte-1jv44gf"
                                src="icons/icon-yellow-star.svg"
                                alt="GitHub Stars Icon"
                            />{' '}
                            <span className="github-stars-count svelte-1jv44gf">60</span>
                        </div>
                        <p>A collection of study materials for OMSCS CS7641 Machine Learning.</p>
                    </a>
                </div>

                <button>See More on GitHub</button>
            </section>
        </div>
    );
};

export default HomePage;
