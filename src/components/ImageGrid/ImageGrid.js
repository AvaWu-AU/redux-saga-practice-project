import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadImages } from '../../actions/actionIndex';
import './styles.css';
import Button from '../Button/Button';
import Stats from '../Stats/Stats';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {

    //不使用redux时获取数据的方法：
    // componentDidMount() {
    //     fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
    //         .then(res => res.json())
    //         .then(images => {
    //             this.setState({
    //                 images,
    //             });
    //         });
    // }

        componentDidMount() {
         this.props.loadImages();
    }

    render() {
        // const images = this.props.isLoading.images;
        // const loadImages = this.props.loadImages;
        // const error = this.props.error;
        // const isLoading = this.props.isLoading.isLoading;
        const {isLoading, images, loadImages, error, imageStats} = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >

                            <Stats stats = {imageStats[image.id]}/>
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    {/* <a onClick = {this.props.loadImages}>Load Images</a> */}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button onClick={() => !isLoading && loadImages()} 
                loading={isLoading}
                >Load More</Button>
            </div>
        );
    }
}

const mapStateToProps = ({isLoading, images, error, imageStats}) => ({
    isLoading,
    images,
    error,
    imageStats
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
