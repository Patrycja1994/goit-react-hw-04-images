import { Dna } from 'react-loader-spinner'
import css from '../Loader/Loader.module.css'

export const Loader = () => (
    <div className={css.overlay}>
    <Dna 
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    />
    </div>
)