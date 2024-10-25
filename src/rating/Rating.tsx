import { FormEvent, useState } from "react"
import star from "../images/icon-star.svg"
import thankYou from "../images/illustration-thank-you.svg"
import { motion } from "framer-motion"

const Rating = () => {
    const [isRate, setIsRate] = useState<boolean>(true)
    const handleSetRate = (e: FormEvent) => {
        e.preventDefault()
        setIsRate(!isRate)
    }
    const [rate, setRate] = useState<number>(0)
    const handleSelectRate = (rating: number) => {
        setRate(rating)
    }
    return (
        <>
            {isRate ? (
                <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration:  1}}
                exit={{opacity: 0}}
                onSubmit={handleSetRate} className="container">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <h1>How did we do?</h1>
                        <p>
                            Please let us know how we did with your support
                            request. All feedback is appreciated to help us
                            improve our offering!
                        </p>
                        <div className="buttonContainer">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button  onClick={() => handleSelectRate(num)} className="rating" type="button">
                                    {num}
                                </button>
                            ))}
                        </div>
                        <button type="submit" className="submit-btn">
                            SUBMIT
                        </button>
                </motion.form>
            ) : (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration:  1}}
                className="container thankYou">
                    <div>
                        <img src={thankYou} alt="thank you" />
                    </div>
                    <p className="selected">You selected {rate} out of 5</p>
                    <h1 className="thankYou">Thank you!</h1>
                    <p>
                        We appreciate you taking the time to give a rating. If
                        you ever need more support, don't hesitate to get in
                        touch!
                    </p>
                </motion.div>
            )}
        </>
    )
}

export default Rating