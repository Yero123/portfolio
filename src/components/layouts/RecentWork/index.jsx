import React from 'react'
import Subtitle from 'components/common/Subtitle'
import Button from '@/components/common/Button'
import Quinti from '@/../public/images/quinti.png'
import QuintiMockUp from '@/../public/images/quintiMock.png'
import QuintiDealer from '@/../public/images/quintiDealers.png'
import QuintiDealerMockUp from '@/../public/images/quintiDealersMockUp.png'
import Image from 'next/image'
import Project from './Project'
const RecentWork = () => {
  const projects = [
    {
      title: "Quinti",
      goal: "+1000 descargas",
      description: "Una aplicativo que se enfoca en traer el servicio de marketplace de restaurantes a zonas alejadas de Lima centro.",
      logo: {
        src: Quinti,
        alt: "quinti"
      },
      mockUp: {
        src: QuintiMockUp,
        alt: "MockUpQuinti"
      },
      link: "https://play.google.com/store/apps/details?id=com.lemaeros.quinti&hl=es_PE&gl=US"
    },
    {
      title: "Quinti dealers",
      goal: "+5 repartidores",
      description: "El aplicativo para los repartidores de Quinti donde pueden gestionar el pedido ",
      logo: {
        src: QuintiDealer,
        alt: "quintiDealers"
      },
      mockUp: {
        src: QuintiDealerMockUp,
        alt: "MockUpQuintiDealers"
      },
      link: "https://play.google.com/store/apps/details?id=com.lemaeros.quinti_deliveries"
    }
  ];
  return <div className='recentWork'>
    <Subtitle text="Recent Work" />
    <div className='recentWork__space' />
    {projects.map((project, index) => <Project
      key={index}
      title={project.title}
      goal={project.goal}
      description={project.description}
      logo={project.logo}
      mockUp={project.mockUp}
      link={project.link}
    />)}
    <div className='recentWork__space2' />

  </div>
}

export default RecentWork