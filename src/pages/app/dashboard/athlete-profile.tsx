// import React { useState } from 'react';
import { Box } from '@/components/box'
import { Helmet } from 'react-helmet-async'
// import Modal from "./dialog";
import DialogAthletes from './dialog-athletes'
import DialogGuardian from './dialog-guardian'
import { UserRound, Phone, Mail, Users, MapPin } from 'lucide-react'

import { useState } from 'react'

const formatPhoneNumber = (phoneGuardian: string) => {
  const cleaned = ('' + phoneGuardian).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return null
}

export function AthletesProfile() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
    position: '',
    city: '',
    state: '',
    country: '',
    nameResponsible: '',
  })
  const [guardian, setGuardian] = useState({
    nameGuardian: '',
    emailGuardian: '',
    relationshipDegreeGuardian: '',
    streetGuardian: '',
    neighborhoodGuardian: '',
    zipcodeGuardian: '',
    stateGuardian: '',
    complementGuardian: '',
    numberGuardian: '',
    phoneGuardian: '',
    cityGuardian: '',
  })

  return (
    <>
      <Helmet title="Atletas" />
      <div className="bg-gradient-to-r from-sky-800 to-lime-300 h-36 absolute inset-x-0 top-24"></div>
      <div className="flex max-[1180px]:w-[100%] w-[80%] max-[1110px]:flex-wrap mx-auto gap-8 relative mt-40 items-start">
        <Box>
          <div className="bg-[#1E1E2D] text-white w-[100%] min-[1111px]:w-[100%] h-auto rounded-lg flex flex-col items-center gap-4 -mt-24">
            <div className="self-end pr-8 pt-8">
              <button className="relative size-6 px-2.5 max-[1110px]:px-5 py-0.5 max-[1110px]:py-1 text-xs font-semibold">
                <DialogAthletes
                  onModalClose={() => console.log('Modal closed')}
                  onUpdate={(state) =>
                    setProfile({
                      ...state,
                    })
                  }
                  initialData={profile}
                />
              </button>
            </div>
            <div className="max-[1110px]:size-48 size-36 bg-purple-700 p-2 rounded-full flex items-center justify-center ">
              <span className="text-6xl">LF</span>
            </div>
            <strong className=" pt-4 max-[1110px]:text-3xl text-medium font-semibold">
              {profile.name}
              {/* {handleDataUpdate.name} */}
            </strong>
            <div className="flex flex-col items-center my-6 w-full">
              <p className="max-[1110px]:text-base text-md text-gray-400 max-[1110px]:leading-10 leading-10">
                {profile.gender}
              </p>
              <p className="max-[1110px]:text-base text-md text-gray-400 max-[1110px]:leading-10 leading-10">
                {profile.age}
              </p>
              <p className="max-[1110px]:text-base text-md text-gray-400 max-[1110px]:leading-10 leading-10">
                {profile.position}
              </p>
              <span className="max-[1110px]:text-base text-md max-[1110px]:leading-10 leading-10">
                {profile.city}
              </span>
              <span className="max-[1110px]:text-base text-md max-[1110px]:leading-10 leading-10">
                {profile.state}
              </span>
              <span className="max-[1110px]:text-base text-md max-[1110px]:leading-10 leading-10">
                {profile.country}
              </span>
            </div>
            <div className="w-full border-b-2 border-slate-900"></div>
            <div className=" text-gray-400 max-[1110px]:text-base text-md mt-4">
              Jogador desde
            </div>
            <div className="flex justify-center p-8">
              <button className="bg-lime-600 rounded-lg max-[1110px]:px-5 py-1 max-[1110px]:text-base text-md font-semibold text-white w-48 h-12">
                Anamnese
              </button>
            </div>
          </div>
        </Box>
        <Box>
          <div className="flex flex-col p-8 bg-[#1E1E2D] text-white w-full h-auto rounded-lg">
            <div className="self-end">
              <button className="relative size-6 px-2.5 max-[1110px]:px-5 py-0.5 max-[1110px]:py-1 text-xs font-semibold">
                <DialogGuardian
                  onModalClose={() => console.log('Modal closed')}
                  onUpdate={(state) =>
                    setGuardian({
                      ...state,
                    })
                  }
                  initialData={guardian}
                />
              </button>
            </div>
            <strong className="text-xl font-semibold pt-2">Responsável</strong>
            <div className="flex flex-col items-start my-6 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center w-full mb-2 pt-4">
                  <UserRound className="mr-2" />
                  <span className="text-medium font-semibold">
                    {guardian.nameGuardian}
                  </span>
                </div>
                <div className="flex items-center w-full mb-2 pt-4 pb-4 px-12">
                  <Users className="mr-2" />
                  <span className="text-medium font-semibold">
                    {guardian.relationshipDegreeGuardian}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center w-full mb-2 pt-4">
                  <Mail className="mr-2" />
                  <span className="text-medium font-semibold">
                    {guardian.emailGuardian}
                  </span>
                </div>
                <div className="flex items-center w-full mb-2 pt-4 px-12">
                  <Phone className="mr-2" />
                  <span className="text-medium font-semibold">
                    {formatPhoneNumber(guardian.phoneGuardian)}
                  </span>
                </div>
              </div>

              <div className="flex items-start w-full pt-14">
                <MapPin className="mr-2" />
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <span className="text-medium font-semibold">
                      {guardian.streetGuardian}, {guardian.numberGuardian} -{' '}
                      {guardian.complementGuardian}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-medium font-semibold">
                      {guardian.neighborhoodGuardian}, {guardian.cityGuardian} -{' '}
                      {guardian.stateGuardian}. CEP {'  '}{' '}
                      {guardian.zipcodeGuardian}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  )
}
