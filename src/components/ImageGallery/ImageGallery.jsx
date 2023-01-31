import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from '../ImageGallery/ImageGallery.module.css'


export const ImageGallery = ({ images, onOpen }) => (
    <ul className={css.imageGallery}>
    { images.map (({ webformatURL, largeImageURL, id, tags }) => (
        <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onOpen={onOpen}
        tags={tags}
        />
    ))}
</ul>
)


ImageGallery.propTypes = {
    onOpen: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    )
}