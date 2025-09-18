require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-render-html"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "11.0" }
  s.source       = { :git => "https://github.com/tristanheilman/react-native-render-html.git", :tag => "#{s.version}" }

  s.source_files = "src/**/*.{h,m,mm,cpp}"

  s.dependency "React-Core"
end
