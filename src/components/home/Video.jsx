import React from 'react'

const Video = ({
    title = "Where Design Moves",
    description = "Dynamic graphic videos designed for modern brands.",
    src = "https://www.youtube.com/embed/1nNz_58fEb4?rel=0&showinfo=0&modestbranding=1"
}) => {
  return (
         <div className="max-w-7xl mx-auto py-20">
          <div className="relative  bg-card clean-border">
            {/* Video Embed */}
            <div className=' mb-5'>
            <div className="text-4xl font-bold text-foreground mb-2">{title}</div>
            <p className="text-lg text-muted-foreground ">{description}</p>
            </div>
            <div className="relative">
              <div className="h-[300px] md:h-[400px] lg:h-[590px] w-full rounded-3xl overflow-hidden">
                <iframe
                  src={src}
                  title={`${title} - YouTube video player`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full "
                //   sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            </div>
            </div>
            </div>
  )
}

export default Video