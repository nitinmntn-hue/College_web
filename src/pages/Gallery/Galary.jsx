import React from 'react';
import FadeInSection from '../../components/FadeInSection';
import '../../assets/styles/gallery.scss';

const Galary = () => {
    return (
        <main className='main-page'>

            <div className="gallery-header">
                <h1 className="heading">Galary Page</h1>

                <p className="description">
                    Welcome to the Galary Page. Here you can find a collection of memorable moments and events captured through photographs.
                </p>

            </div>
            <div>
                {/* <FadeInSection > */}
                {/* </FadeInSection> */}
            </div>
            <div className="gallery-grid">
                {/* <FadeInSection > */}
                <div className="gallery-item">
                    <img src="https://media.gettyimages.com/id/2253452809/photo/nbl-rd-14-sydney-kings-v-illawarra-hawks.jpg?s=2048x2048&w=gi&k=20&c=tfp4HfPNH45t35ZNw5UNFSw5AJBK6UWRdiXhPfE6od4=" alt="Gallery Item 2" />
                    <img src="https://media.gettyimages.com/id/2253452809/photo/nbl-rd-14-sydney-kings-v-illawarra-hawks.jpg?s=2048x2048&w=gi&k=20&c=tfp4HfPNH45t35ZNw5UNFSw5AJBK6UWRdiXhPfE6od4=" alt="Gallery Item 2" />
                    <img src="https://media.gettyimages.com/id/2253452809/photo/nbl-rd-14-sydney-kings-v-illawarra-hawks.jpg?s=2048x2048&w=gi&k=20&c=tfp4HfPNH45t35ZNw5UNFSw5AJBK6UWRdiXhPfE6od4=" alt="Gallery Item 2" />
                    <p className="caption">Caption for Gallery Item 1</p>
                </div>
                <div className="gallery-item">
                    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=1500&quality=50" alt="Gallery Item 3" />
                    <p className="caption">Caption for Gallery Item 2</p>
                </div>
                <div className="gallery-item">
                    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/tall-skyscrapers-view-from-below-vintage-edit-free-photo.jpg?w=1500&quality=50" alt="Gallery Item 4" />
                    <p className="caption">Caption for Gallery Item 3</p>
                </div>

            </div>
        </main>
    )
}

export default Galary