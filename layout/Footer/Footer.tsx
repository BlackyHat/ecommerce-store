import content from '@/data/common.json'

export const Footer = () => {
  return (
    <footer className="border-t pt-12">
      <div className="container">
        <p className="text-center text-base text-black py-4">
          {content.footer.copyRights}
        </p>
      </div>
    </footer>
  )
}
