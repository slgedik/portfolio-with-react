import React from 'react';
export default function Home() {
    return(
    <section className="about bg-green" style={{
        backgroundImage: 'url(https://media1.tenor.com/m/mGgWY8RkgYMAAAAd/hello-world.gif)',
        backgroundSize: 'cover', // Ensure the GIF covers the entire background
        backgroundPosition: 'center', // Center the GIF
        backgroundRepeat: 'no-repeat', // Prevent repeating of the GIF
        height: '100vh', // Make the section fill the entire viewport height
      }}>
      
    </section>
    )
}