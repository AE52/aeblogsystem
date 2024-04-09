interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'FNC Yapı',
    description: `Fnc yapı`,
    imgSrc: '',
    href: '/blog/fncyapi',
  },
  {
    title: 'Duyar Hukuk ve Danışmanlık',
    description: `Duyar hukuk`,
    imgSrc: '',
    href: '/blog/duyarhukuk',
  },
  {
    title: 'DMR Karbon Güçlendirme',
    description: `DMR Karbon Güçlendirme`,
    imgSrc: '',
    href: '/blog/dmrkarbonguclendirme',
  },
]

export default projectsData
