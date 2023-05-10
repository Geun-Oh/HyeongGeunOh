import { St } from "../template/InfoCardSection"
import Shimmer from "../atom/Shimmer"

const DailyShimmer = () => {
    return (
        <St.InfoCardSectionWrapper>
            <Shimmer width="200px" height="1rem" />
            <St.InfoCardWrapper>
                <Shimmer width="210px" height="400px" />
            </St.InfoCardWrapper>
        </St.InfoCardSectionWrapper>
    )
}

export default DailyShimmer;