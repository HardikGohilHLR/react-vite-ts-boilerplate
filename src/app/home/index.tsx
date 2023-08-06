// Home
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
    return (
        <>
            <section className="section">

                <div className="content">
                    <h1>React.js + TypeScript Starter</h1>
                    <p>A Starter for React.js, TypeScript with Redux and built with Vite</p>
                    <Link to="https://github.com/HardikGohilHLR/react-vite-ts-boilerplate" target="_blank" className="btn">
                        GitHub
                    </Link>
                </div>

                <footer>
                    <p>
                        &copy; {new Date().getFullYear()} {" "}
                        By <Link to="https://hardikgohilhlr.tech" target="_blank">
                            Hardik Gohil
                        </Link>
                    </p>
                </footer>

            </section>
        </>
    );
}

export default Home;