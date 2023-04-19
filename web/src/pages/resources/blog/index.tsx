import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../../data/globalData"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import { sortByDate, sortByProperty } from "../../../utils/sort"

const BlogPage: React.FC<PageProps> = () => {
  const [pageData, setPageData] = React.useState<any | undefined>()
  const [blogsItems, setBlogsItems] = React.useState<any | undefined>()
  const { firstSection, secondSection } = pageData ? pageData : []
  const [blogCategories, setBlogCategories] = React.useState(new Array())
  const [allCategories, setAllCategories] = React.useState(blogCategories)
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)
  const [selectedCategoryBlogs, setSelectedCategoryBlogs] = React.useState(
    allCategories[selectedCategoryIndex]?.attributes?.blogs?.data
  )

  React.useEffect(() => {
    if (!blogsItems) {
      getPageData()
    }
  })

  React.useEffect(() => {
    if (blogCategories?.length) {
      const filteredCategories = blogCategories?.filter(el => {
        const blogs = el?.attributes?.blogs?.data
        if (blogs?.length) {
          return el
        }
      })

      filteredCategories?.unshift({
        attributes: {
          order: 1,
          blogs: { data: blogsItems },
          name: "All Topics",
        },
      })

      setAllCategories(filteredCategories)
    }
  }, [blogCategories])

  React.useEffect(() => {
    setSelectedCategoryBlogs(
      allCategories[selectedCategoryIndex]?.attributes?.blogs?.data
    )
  }, [allCategories, selectedCategoryIndex])

  const getPageData = async () => {
    const json_data = await require("./data/blogsData.json")
    setPageData(json_data?.data && json_data?.data)
    if (pageData) {
      await fetch(`http://127.0.0.1:1337/api/blogs?&populate=*`)
        .then(response => response.json())
        .then(jsonResponse => {
          const blogs = jsonResponse?.data
          const sorteredBlogs = sortByDate(blogs)
          setBlogsItems(sorteredBlogs)
          getBlogsCategories
        })
        .catch((error: any) => {})
    }
    getBlogsCategories()
  }

  const getBlogsCategories = async () => {
    if (pageData) {
      await fetch(`http://127.0.0.1:1337/api/categories?populate=deep`)
        .then(response => response.json())
        .then(jsonResponse => {
          const categories = jsonResponse?.data
          const sortedCategories = sortByProperty(categories, "order")
          setBlogCategories(sortedCategories)
        })
        .catch((error: any) => {})
    }
  }

  return (
    <Layout>
      <>
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
          form={firstSection?.form}
        />
        <SecondSection
          blogsCategorySelected={selectedCategoryBlogs}
          categories={allCategories}
          loadMoreButton={secondSection?.loadMoreButton}
          setSelectedCategoryIndex={setSelectedCategoryIndex}
          selectedCategoryIndex={selectedCategoryIndex}
        />

        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            action: () => navigate("/company/contactUs"),
          }}
          rightButton={{
            label: "Try for free",
            action: () => window.open(gatacaStudioURL, "_blank"),
          }}
        />
      </>
    </Layout>
  )
}

export default BlogPage