import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Toast } from 'primereact/toast';
import { ShowImagesProps } from '../../../Type/ComponentBasedTypes';

const UploadImages: React.FC<ShowImagesProps & { customStyle?: React.CSSProperties }> = ({
    handleNoteChange,
    hoveredIndex,
    handleRemoveImage,
    setHoveredIndex,
    handleImageChange,
    setImageVisible,
    imageRequestDtoList,
    isLoading,
    images,
    toastRef,
    customStyle, // Custom style prop
}) => {
    return (
        <div>
            <Toast ref={toastRef} />
            <div className={`border mt-6`} style={{ ...customStyle }}>
                <div className="flex justify-center text-center">
                    <div>
                        <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                        <label
                            htmlFor="file-input"
                            style={{
                                width: '20px',
                                height: '120px',
                                fontSize: '0.8rem',
                                paddingLeft: '0.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '-120px',
                            }}
                        >
                            <div
                                className="mt-12"
                                style={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
                                <img src="/assets/images/upload.png" alt="Upload Icon" />
                                <div
                                    style={{
                                        textAlign: 'center',
                                        width: '220px',
                                        color: '#416072',
                                    }}
                                >
                                    Drag and drop files here.
                                    <br />
                                    All jpg, png, pdf types are supported
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    {images.length > 0 && (
                        <div className="mt-2">
                            <div className="flex gap-16 flex-wrap">
                                {images.map((image: string | undefined, index: number) => (
                                    <div
                                        key={index}
                                        style={{
                                            position: 'relative',
                                            display: 'inline-block',
                                        }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <AiOutlineDelete
                                            onClick={() => handleRemoveImage(index)}
                                            style={{
                                                position: 'absolute',
                                                top: '165px',
                                                right: '5px',
                                                background: 'red',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '5px',
                                                width: '28px',
                                                height: '25px',
                                                cursor: 'pointer',
                                                opacity: hoveredIndex === index ? 1 : 0,
                                                transition: 'opacity 0.3s',
                                            }}
                                        />
                                        <img
                                            src={image}
                                            alt={`Uploaded ${index}`}
                                            style={{
                                                width: '300px',
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: '0.5rem',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UploadImages;
