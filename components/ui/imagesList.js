import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import CancelIcon from '@mui/icons-material/Cancel';


export default function StandardImageList(props) {

    const handleClose = () => props.setOpen(false)

    return (
        <>
            <CancelIcon sx={{
                position: 'fixed',
                fontSize: '35px',
                top: '20px',
                right: '20px',
                color: '#fff',
                zIndex: '1',
            }}
                onClick={handleClose}
            />
            <ImageList sx={{
                width: '100%',
                height: '100%',

                // display: 'flex',
                // display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'center',
                '@media (min-width:1024px)': {
                    // ml: '20px',
                    ml: '230px',
                    width: '90%',

                },
                '@media (min-width:1440px)': {
                    // ml: '20px',
                    ml: '300px',
                    width: '90%',

                },
            }} cols={1} >

                {props.images.map((item) => (

                    <ImageListItem key={item}

                    >
                        <img
                            src={item}
                            srcSet={item}
                            alt={item}
                            loading="lazy"
                        />

                        {/* <Image
                        src={item}
                        width={340}
                        height={400}
                        layout='responsive'
                        placeholder="blur"
                        blurDataURL={item}
                        priority={true}

                    /> */}
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

