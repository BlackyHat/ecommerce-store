import content from '@/data/common.json'

export const Footer = () => {
  return (
    <footer className="border-t pt-12">
      <div className="container">
        <p className="py-4 text-center text-base text-black">
          {content.footer.copyRights}
        </p>
      </div>
    </footer>
  )
}
