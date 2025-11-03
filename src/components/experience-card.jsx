const ExperienceCard = ({ title, organization, startDate, endDate, description = null, skills }) => (
  <li className='rounded-lg mb-6 gap-2 grid grid-cols-4'>
    <span className='uppercase col-span-1 text-xs self-center'>
      {startDate} &mdash; {endDate}
    </span>
    <h3 className='text-sm text-slate-200 col-start-2 col-span-3 font-semibold self-center'>
      {title} &middot; {organization}
    </h3>
    <p className='col-start-2 col-span-3'>{description}</p>
    <ul className='col-start-2 col-span-3 flex flex-wrap gap-2'>
      {skills.map((skill) => (
        <li
          key={skill}
          className='rounded-full bg-teal-400/10 px-3 py-1 text-xs font-normal leading-5 text-teal-300'
        >
          {skill}
        </li>
      ))}
    </ul>
  </li>
)

export default ExperienceCard
