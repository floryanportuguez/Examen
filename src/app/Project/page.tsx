"use client"
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Repository {
    id: number;
    name: string;
    html_url: string;
    owner: {
        avatar_url: string;
    };
}

export default function Home() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://api.github.com/users/floryanportuguez/repos');
                const data = await res.json();
                setRepositories(data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div>
            <h1>PROJECTS</h1>
            <Slider {...settings}>
                {repositories.map((repo) => (
                    <div key={repo.id} >
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <h2>{repo.name}</h2>
                            <img src={'/img/3.jpg'} alt="Avatar" className="avatar-img" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

