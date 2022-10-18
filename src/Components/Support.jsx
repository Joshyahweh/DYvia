import React from 'react'
import { PhoneIcon, ArrowSmallRightIcon} from '@heroicons/react/24/outline'
import { CpuChipIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'

import supportImg from '../Assets/support.jpg'

const Support = () => {
  return (
    <div>
        <figure>
            <img src={supportImg} alt="Support" />
        </figure>
        <main>
            <h2>Support</h2>
            <h3>Finding the right team</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sit nesciunt reprehenderit, ut dolore nemo quae aliquam. Excepturi amet eaque alias veniam, ratione officiis magnam possimus earum id nulla vero reiciendis error ea quidem recusandae.</p>
        </main>

    </div>
  )
}

export default Support