import { is } from "@deepkit/type";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ClassMethod = _test_deepkit_is(
    "ClassMethod",
    ClassMethod.generate,
    (input) => is<ClassMethod>(input),
    ClassMethod.SPOILERS,
);