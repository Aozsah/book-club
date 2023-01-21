function ProfilePage(props) {
    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);
    const [readingList, setReadingList] = useState([]);
    const [formData, setFormData] = useState({
        bookId: '',
        rating: '',
        review: '',
    });

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/user/' + props.userId);
            const data = await res.json();
            setUser(data.user);
            setReviews(data.reviews);
            setReadingList(data.readingList);
        }
        fetchData();
    }, []);

    const handleAddToReadingList = (bookId) => {
        // Add book to user's reading list
    };

    const handleLeaveReview = (event) => {
        event.preventDefault();
        // Send formData to server
    };

    const handleFormChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div className="profile-container">
            <img className="profile-avatar" src={user.avatarUrl} alt="User Avatar" />
            <h1 className="profile-name">{user.username}</h1>
            {reviews.length > 0 ? (
                <div className="profile-reviews">
                    {reviews.map((review) => (
                        <ReviewCard review={review} />
                    ))}
                </div>
            ) : (
                <p>This user has not left any reviews yet.</p>
            )}
            <div className="profile-reading-list">
                <h2>Reading List</h2>
                {readingList.map((book) => (
                    <BookCard book={book} handleAddToReadingList={handleAddToReadingList} handleLeaveReview={handleLeaveReview} handleFormChange={handleFormChange}/>
                ))}
            </div>
        </div>
    );
}
