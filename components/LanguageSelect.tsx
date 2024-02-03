import type { FC } from 'react';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={language}
      onChange={handleChange}
    >
      {languages
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
    </select>
  );
};

const languages = [
  { value: 'Natural Language', label: 'Natural Language' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'CoffeeScript', label: 'CoffeeScript' },
  { value: 'Dart', label: 'Dart' },
  { value: 'TSX', label: 'TSX' },
  { value: 'JSX', label: 'JSX' },
  { value: 'Vue', label: 'Vue' },
  { value: 'CSS', label: 'CSS' },
  { value: 'HTML', label: 'HTML' },
  { value: 'SwiftUI', label: 'SwiftUI' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Objective-C', label: 'Objective-C' },
  { value: 'Python', label: 'Python' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Go', label: 'Go' },
  { value: 'Rust', label: 'Rust' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'C#', label: 'C#' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Elixir', label: 'Elixir' },
  { value: 'Java', label: 'Java' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Groovy', label: 'Groovy' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Julia', label: 'Julia' },
  { value: 'Lua', label: 'Lua' },
  { value: 'Haskell', label: 'Haskell' },
  { value: 'R', label: 'R' },
  { value: 'Clojure', label: 'Clojure' },
  { value: 'Matlab', label: 'Matlab' },
  { value: 'Fortran', label: 'Fortran' },
  { value: 'Lisp', label: 'Lisp' },
  { value: 'Racket', label: 'Racket' },
  { value: 'Perl', label: 'Perl' },
  { value: 'Pascal', label: 'Pascal' },
  { value: 'Assembly Language', label: 'Assembly Language' },
  { value: 'COBOL', label: 'COBOL' },
  { value: 'Visual Basic .NET', label: 'Visual Basic .NET' },
  { value: 'SQL', label: 'SQL' },
  { value: 'SAS', label: 'SAS' },
  { value: 'Bash', label: 'Bash' },
  { value: 'Powershell', label: 'Powershell' },
  { value: 'PL/SQL', label: 'PL/SQL' },
  { value: 'NoSQL', label: 'NoSQL' },
];
