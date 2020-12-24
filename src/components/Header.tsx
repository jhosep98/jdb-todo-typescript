type TitleProps = {
  title: string;
};

export const Header = ({ title }: TitleProps) => {
  return (
    <header className="bg-gray-900">
      <nav>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16 md:justify-start">
            <h1 className="text-4xl text-white font-bold uppercase text-center">
              {title}
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
};
