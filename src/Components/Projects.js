import React from 'react';

export default function Project() {
    return (
        <section id="projects" className="projects items-center ">
            <h2 className='pt-8'>To access my projects</h2>
            <div
                className="items-center flex justify-center"
               
            >
                <a href='https://github.com/slgedik'  style={{
                    backgroundImage: 'url(https://media4.giphy.com/media/A7LF3J4uMJQ4r8ApLg/giphy.gif?cid=6c09b952zzmkie3ehc8bw1yldiqjdsmh62svypqz4twu8abl&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s)',
                    backgroundSize: 'cover', // GIF'in boyutunu butonla uyumlu olacak şekilde ayarladık
                    backgroundPosition: 'center', // GIF'i div'in tam ortasında konumlandırdık
                    backgroundRepeat: 'no-repeat', // GIF'in tekrarlanmamasını sağladık
                    height: '50px', // Buton boyutunda yükseklik
                    width: '150px', // Buton boyutunda genişlik
                    border: 'none', // Kenarlık yok
                    borderRadius: '5px', // Yuvarlak köşeler
                    cursor: 'pointer', // Tıklanabilir görünüm
                    display: 'flex', // Flexbox düzeni
                    justifyContent: 'center', // İçeriği yatayda ortalar
                    alignItems: 'center', // İçeriği dikeyde ortalar
                }}></a>
            </div>
        </section>
    );
}
