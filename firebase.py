
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

# Initialize the app with a service account
cred = credentials.Certificate("C:\\Users\\ABINESH16\\Downloads\\securityAccountkey.json")
firebase_admin.initialize_app(cred)

# Connect to Firestore
db = firestore.client()
from google.auth.transport.requests import Request
from google.auth import exceptions

try:
    request = Request()
    # Disable SSL verification
    request.ssl_context = None
except exceptions.GoogleAuthError as e:
    print(f"Error disabling SSL verification: {e}")

# CRUD Operations

# 1. Users Collection CRUD Operations
def create_user(name, email, role, courses):
    user = {
        "name": name,
        "email": email,
        "role": role,
        "courses": courses
    }
    result = db.collection('users').add(user)
    return result.id

def read_user(user_id):
    user = db.collection('users').document(user_id).get()
    return user.to_dict() if user.exists else None

def update_user(user_id, update_fields):
    db.collection('users').document(user_id).update(update_fields)

def delete_user(user_id):
    db.collection('users').document(user_id).delete()

# 2. Courses Collection CRUD Operations
def create_course(course_name, teacher_id, assignments):
    course = {
        "courseName": course_name,
        "teacherId": teacher_id,
        "assignments": assignments
    }
    result = db.collection('courses').add(course)
    return result.id

def read_course(course_id):
    course = db.collection('courses').document(course_id).get()
    return course.to_dict() if course.exists else None

def update_course(course_id, update_fields):
    db.collection('courses').document(course_id).update(update_fields)

def delete_course(course_id):
    db.collection('courses').document(course_id).delete()

# 3. Assignments Collection CRUD Operations
def create_assignment(course_id, title, description, due_date):
    assignment = {
        "courseId": course_id,
        "title": title,
        "description": description,
        "dueDate": due_date
    }
    result = db.collection('assignments').add(assignment)
    return result.id

def read_assignment(assignment_id):
    assignment = db.collection('assignments').document(assignment_id).get()
    return assignment.to_dict() if assignment.exists else None

def update_assignment(assignment_id, update_fields):
    db.collection('assignments').document(assignment_id).update(update_fields)

def delete_assignment(assignment_id):
    db.collection('assignments').document(assignment_id).delete()

# 4. Submissions Collection CRUD Operations
def create_submission(assignment_id, student_id, submission_date, content, grade, feedback_id):
    submission = {
        "assignmentId": assignment_id,
        "studentId": student_id,
        "submissionDate": submission_date,
        "content": content,
        "grade": grade,
        "feedbackId": feedback_id
    }
    result = db.collection('submissions').add(submission)
    return result.id

def read_submission(submission_id):
    submission = db.collection('submissions').document(submission_id).get()
    return submission.to_dict() if submission.exists else None

def update_submission(submission_id, update_fields):
    db.collection('submissions').document(submission_id).update(update_fields)

def delete_submission(submission_id):
    db.collection('submissions').document(submission_id).delete()

# 5. Feedback Collection CRUD Operations
def create_feedback(submission_id, comments, suggestions):
    feedback = {
        "submissionId": submission_id,
        "comments": comments,
        "suggestions": suggestions
    }
    result = db.collection('feedback').add(feedback)
    return result.id

def read_feedback(feedback_id):
    feedback = db.collection('feedback').document(feedback_id).get()
    return feedback.to_dict() if feedback.exists else None

def update_feedback(feedback_id, update_fields):
    db.collection('feedback').document(feedback_id).update(update_fields)

def delete_feedback(feedback_id):
    db.collection('feedback').document(feedback_id).delete()
if __name__ == "__main__":
    # Create a user
    user_id = create_user("John Doe", "john.doe@example.com", "student", [])
    print(f"User  created with ID: {user_id}")

    # Read the user
    user = read_user(user_id)
    print(f"User  read: {user}")

    # Update the user
    update_user(user_id, {"name": "John Smith"})
    updated_user = read_user(user_id)
    print(f"User  updated: {updated_user}")

    # Delete the user
    delete_user(user_id)
    print(f"User  deleted with ID: {user_id}")

    # Create a course
    course_id = create_course("Introduction to AI", user_id, [])
    print(f"Course created with ID: {course_id}")

    # Read the course
    course = read_course(course_id)
    print(f"Course read: {course}")

    # Update the course
    update_course(course_id, {"courseName": "Advanced AI"})
    updated_course = read_course(course_id)
    print(f"Course updated: {updated_course}")

    # Delete the course
    delete_course(course_id)
    print(f"Course deleted with ID: {course_id}")

    # Create an assignment
    assignment_id = create_assignment(course_id, "Essay on AI Ethics", "Write a 1000-word essay on the ethical implications of AI.", datetime(2023, 12, 1))
    print(f"Assignment created with ID: {assignment_id}")

    # Read the assignment
    assignment = read_assignment(assignment_id)
    print(f"Assignment read: {assignment}")

    # Update the assignment
    update_assignment(assignment_id, {"title": "Updated Essay on AI Ethics"})
    updated_assignment = read_assignment(assignment_id)
    print(f"Assignment updated: {updated_assignment}")

    # Delete the assignment
    delete_assignment(assignment_id)
    print(f"Assignment deleted with ID: {assignment_id}")

    # Create a submission
    submission_id = create_submission(assignment_id, user_id, datetime.now(), "The essay content goes here...", 85, None)
    print(f"Submission created with ID: {submission_id}")

    # Read the submission
    submission = read_submission(submission_id)
    print(f"Submission read: {submission}")

    # Update the submission
    update_submission(submission_id, {"grade": 90})
    updated_submission = read_submission(submission_id)
    print(f"Submission updated: {updated_submission}")

    # Delete the submission
    delete_submission(submission_id)
    print(f"Submission deleted with ID: {submission_id}")

    # Create feedback
    feedback_id = create_feedback(submission_id, "Well written, but needs more examples.", "Consider adding case studies.")
    print(f"Feedback created with ID: {feedback_id}")

    # Read the feedback
    feedback = read_feedback(feedback_id)
    print(f"Feedback read: {feedback}")

    # Update the feedback
    update_feedback(feedback_id, {"comments": "Excellent work!"})
    updated_feedback = read_feedback(feedback_id)
    print(f"Feedback updated: {updated_feedback}")

    # Delete the feedback
    delete_feedback(feedback_id)
    print(f"Feedback deleted with ID: {feedback_id}")
