import React from 'react'
import ReachedItem from '../../molecules/ReachedItem'

export default function Reached () {
  return (
    <section className='reached pt-50 pb-50'>
      <div className='container-fluid'>
        <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4'>
          <ReachedItem numberData='120M' description='Players Top Up' />
          <div className='vertical-line me-lg-35 ms-lg-35 d-lg-block d-none'></div>
          <div className='horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block'></div>
          <ReachedItem numberData='12.500' description='Games Available' />
          <div className='horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block'></div>
          <div className='vertical-line me-lg-35 ms-lg-35 d-lg-block d-none'></div>
          <ReachedItem numberData='99.9%' description='Happy Players' />
          <div className='horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block'></div>
          <div className='vertical-line me-lg-35 ms-lg-35 d-lg-block d-none'></div>
          <ReachedItem numberData='4.7' description='Rating Worldwide' />
        </div>
      </div>
    </section>
  )
}
