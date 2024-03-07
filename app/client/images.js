import Image from 'next/image';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Images() {
    const { data, error, isLoading } = useSWR('https://api.slingacademy.com/v1/sample-data/photos', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>


    return (
        <div className='grid grid-cols-3 gap-8'>
            {data.photos.map((image, index) => (
                <ImageRender key={index} url={image.url} title={image.title} alt={image.description} image={image} />
            ))}
        </div>
    );
}

function ImageRender({ image, url, title, alt }) {
    return (<img src={url} alt={alt} width="300" height="300" />);
}