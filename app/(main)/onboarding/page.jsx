import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { industries } from '@/data/industries'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/dist/server/api-utils'

const OnboardingPage = async () => {
    const {isOnboarded} = await getUserOnboardingStatus();
    if(isOnboarded){
        redirect('/dashboard');
    }
  return (
    <main>
        <OnboardingForm industries={industries}></OnboardingForm>
    </main>
  )
}

export default OnboardingPage