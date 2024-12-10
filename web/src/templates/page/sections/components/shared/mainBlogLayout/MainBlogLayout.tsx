import * as React from "react"
import cx from "classnames"
import * as styles from "./mainBlogLayout.module.scss"
import {
  ButtonModel,
  HeadingModel,
} from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"
import ChipGroup from "../../generic/chipGroup/ChipGroup"
import BlogCardContainer from "../BlogCardContainer/BlogCardContainer"
import Button from "../../generic/button/Button"
import { sortByDate, sortByProperty } from "../../../../../../utils/sort"

export type ISectionProps = {
  idItem?: string
  heading?: HeadingModel
  button?: ButtonModel
  chip_options?: any
  category_options?: any
  blogHighlightCardContainer?: any
  blogsAll: any
  allCategory?: string
}

const MainBlogLayout: React.FC<ISectionProps> = props => {
  const {
    idItem,
    heading,
    button,
    blogHighlightCardContainer,
    blogsAll,
    chip_options,
    category_options,
    allCategory,
  } = props

  const [loadMoreCounter, setLoadMoreCounter] = React.useState(1)

  const [blogCategories, setBlogCategories] = React.useState(new Array())

  const [allCategories, setAllCategories] = React.useState(blogCategories)

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)

  const [selectedCategoryBlogs, setSelectedCategoryBlogs] = React.useState(
    allCategories[selectedCategoryIndex]?.attributes?.blogs?.data
  )
  const sortedCategories = sortByProperty(category_options, "order")

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
          blogs: { data: blogsAll },
          name: allCategory ? allCategory : "All Topics",
        },
      })

      setAllCategories(filteredCategories)
    }
    setBlogCategories(sortedCategories)
  }, [blogCategories])

  React.useEffect(() => {
    setSelectedCategoryBlogs(
      allCategories[selectedCategoryIndex]?.attributes?.blogs?.data
    )
  }, [allCategories, selectedCategoryIndex])

  return (
    <div
      id={idItem}
      className={`${styles.blogHighlightCard__container} ${cx(
        "containerMaxWidth"
      )}`}
    >
      {heading && (
        <Heading
          {...heading}
          button={{
            ...heading?.button,
            action: () => window.open(heading?.button?.url, "_blank"),
          }}
        />
      )}

      <ChipGroup
        chipOptions={chip_options}
        categoryOptions={allCategories}
        setSelectedCategoryIndex={setSelectedCategoryIndex}
        selectedCategoryIndex={selectedCategoryIndex}
      />

      <BlogCardContainer
        idItem={blogHighlightCardContainer?.idItem}
        blog_card={
          blogHighlightCardContainer?.blog_card?.data?.attributes?.blog
        }
        blogs={sortByDate(selectedCategoryBlogs)}
        columns={blogHighlightCardContainer?.columns}
        loadMoreCounter={loadMoreCounter}
      />

      {selectedCategoryBlogs?.length > 0 &&
        loadMoreCounter * 6 < selectedCategoryBlogs?.length && (
          <div className={styles?.buttonContainer}>
            {(button?.label?.length ||
              button?.icon?.data?.attributes?.url?.length) && (
              <Button
                idButton={button?.idButton}
                label={button?.label}
                icon={button?.icon}
                style={button?.style}
                color={button?.color}
                size={button?.size}
                noPaddingText={button?.noPaddingText}
                disabled={button?.disabled}
                link={button?.link}
                url={button?.url}
                action={() => setLoadMoreCounter(loadMoreCounter + 1)}
              />
            )}
          </div>
        )}
    </div>
  )
}

export default MainBlogLayout
