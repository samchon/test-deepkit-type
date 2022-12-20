import { is } from "@deepkit/type";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicComposite = _test_deepkit_is(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => is<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);